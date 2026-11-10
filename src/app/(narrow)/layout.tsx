import { Footer } from "@/features/layout/components/footer";

export default function NarrowLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="max-w-3xl mx-auto px-6">
      {children}
      <Footer />
    </div>
  );
}
