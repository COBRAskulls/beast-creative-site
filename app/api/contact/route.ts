import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const rateMap = new Map<string, { count: number; resetAt: number }>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateMap.get(ip);
  if (!entry || now > entry.resetAt) {
    rateMap.set(ip, { count: 1, resetAt: now + 60_000 });
    return false;
  }
  if (entry.count >= 5) return true;
  entry.count++;
  return false;
}

const schema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email().max(254),
  phone: z.string().max(30).optional(),
  company: z.string().max(200).optional(),
  service: z.string().max(100).optional(),
  services: z.array(z.string().max(100)).optional(),
  revenue: z.string().max(50).optional(),
  challenge: z.string().max(100).optional(),
  message: z.string().max(2000).optional(),
  website: z.string().max(0).optional(),
});

export async function POST(request: NextRequest) {
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  if (isRateLimited(ip)) {
    return NextResponse.json({ error: "Too many requests" }, { status: 429 });
  }

  try {
    const body = await request.json();
    const data = schema.parse(body);

    if (data.website) {
      return NextResponse.json({ success: true }, { status: 200 });
    }

    const toEmail =
      process.env.CONTACT_EMAIL || "hello@beastcreativeagency.com";
    const resendKey = process.env.RESEND_API_KEY;

    if (resendKey) {
      const { website: _hp, services, ...fields } = data;
      const emailBody = [
        ...Object.entries(fields)
          .filter(([, v]) => v)
          .map(([k, v]) => `${k}: ${v}`),
        ...(services?.length ? [`services: ${services.join(", ")}`] : []),
      ].join("\n");

      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 10_000);

      try {
        await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${resendKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            from: "Beast Website <noreply@beastcreativeagency.com>",
            to: [toEmail],
            subject: `New Lead: ${data.name} - ${data.company || data.email}`,
            text: emailBody,
          }),
          signal: controller.signal,
        });
      } finally {
        clearTimeout(timeout);
      }
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    if (err instanceof z.ZodError) {
      return NextResponse.json({ error: "Invalid data" }, { status: 400 });
    }
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
