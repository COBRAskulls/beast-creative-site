import ScrollProgress from "@/components/ui/ScrollProgress";

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ScrollProgress />
      {children}
    </>
  );
}
