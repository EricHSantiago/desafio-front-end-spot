import Header from "@/components/Header/header";
import Sidebar from "@/components/Sidebar/sidebar";

export default function PrivateLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-screen h-screen flex flex-row bg-[#F5F6FA]">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="p-4">{children}</main>
      </div>
    </div>
  );
}
