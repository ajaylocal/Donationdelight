import AdminSidebar from "@/components/admin/sidebar";
import AdminTopbar from "@/components/admin/topbar";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <AdminSidebar />

      {/* Main wrapper */}
      <div className="flex-1 flex flex-col">
        <AdminTopbar />

        {/* Content area with footer at the bottom */}
        <main className="flex-1 flex flex-col bg-gray-50">
          <div className="flex-1 p-8">{children}</div>
          <footer className="bg-gray-200 text-center py-4 text-sm text-gray-600">
            © 2025 DonationDelight. All rights reserved.
          </footer>
        </main>
      </div>
    </div>
  );
}
