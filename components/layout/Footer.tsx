import Link from "next/link";
import Image from "next/image";
import IconButton from "@/components/ui/IconButton";

export default function Footer() {
  return (
    <footer className="bg-footer-black pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Col 1: Brand */}
          <div>
            <Image
              src="/assets/beast-logo.svg"
              alt="Beast Creative Agency"
              width={120}
              height={40}
              className="h-8 w-auto mb-4"
            />
            <p className="text-sm text-gray-500 leading-relaxed mb-3 max-w-xs">
              AI-powered marketing that actually moves the needle. CPG and digital marketing for brands scaling nationally.
            </p>
            <p className="text-xs text-gray-600 font-medium">
              Beast Creative Agency · San Antonio, TX
            </p>
          </div>

          {/* Col 2: Services */}
          <div>
            <h4 className="font-display text-white font-semibold text-xs tracking-widest uppercase mb-5">Services</h4>
            <ul className="space-y-3 text-sm text-gray-500">
              <li><Link href="/services/cpg-marketing" className="hover:text-beast-pink transition-colors">CPG Marketing</Link></li>
              <li><Link href="/services/seo-aeo" className="hover:text-beast-pink transition-colors">SEO + AEO</Link></li>
              <li><Link href="/services/paid-media" className="hover:text-beast-pink transition-colors">Paid Media</Link></li>
              <li><Link href="/services/content-production" className="hover:text-beast-pink transition-colors">AI Content Production</Link></li>
              <li><Link href="/services/branding" className="hover:text-beast-pink transition-colors">Branding</Link></li>
              <li><Link href="/services/web-design" className="hover:text-beast-pink transition-colors">Web Design & CRO</Link></li>
            </ul>
          </div>

          {/* Col 3: Company */}
          <div>
            <h4 className="font-display text-white font-semibold text-xs tracking-widest uppercase mb-5">Company</h4>
            <ul className="space-y-3 text-sm text-gray-500">
              <li><Link href="/about" className="hover:text-beast-pink transition-colors">About Us</Link></li>
              <li><Link href="/work" className="hover:text-beast-pink transition-colors">Our Work</Link></li>
              <li><Link href="/cpg" className="hover:text-beast-pink transition-colors">CPG Brands</Link></li>
              <li><Link href="/blog" className="hover:text-beast-pink transition-colors">Blog</Link></li>
              <li><Link href="/contact" className="hover:text-beast-pink transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Col 4: Get Started */}
          <div>
            <h4 className="font-display text-white font-semibold text-xs tracking-widest uppercase mb-5">Get Started</h4>
            <p className="text-sm text-gray-500 mb-5">No commitments. Just a free strategy conversation.</p>
            <IconButton href="https://calendar.app.google/9q1mcYgEdXNyjK8G6" icon="calendar" target="_blank" rel="noopener noreferrer" className="mb-6">Free 15-Min Strategy Call</IconButton>
            <div className="mt-4 text-sm text-gray-600 space-y-1">
              <div>
                <a href="sms:+12103320567" className="hover:text-beast-pink transition-colors">
                  (210) 332-0567
                </a>
              </div>
              <div>San Antonio, TX</div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-600">© 2026 Beast Creative Agency. All rights reserved.</p>
          <div className="flex gap-6 text-xs text-gray-600">
            <Link href="/privacy" className="hover:text-gray-400 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-gray-400 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
