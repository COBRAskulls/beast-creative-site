import ScrollProgress from "@/components/ui/ScrollProgress";

export default function WorkLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ScrollProgress />
      {children}
    </>
  );
}
