import Sidebar from "./Sidebar";
import Header from "./Header";

export default function DashboardShell({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Sidebar />

      <div>
        <Header />

        <main>
          {children}
        </main>
      </div>
    </div>
  );
}