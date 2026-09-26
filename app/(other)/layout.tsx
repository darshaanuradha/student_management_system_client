
export default function OtherLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
        <main className="min-h-screen max-w-7xl mx-auto flex flex-col bg-green-300">
                {children}
        </main>
    </>
  );
}