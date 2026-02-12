import type { Metadata } from "next";
import "./admin.css";

export const metadata: Metadata = {
  title: "Admin Hub | Black Veterans Project",
  description: "BVP Admin Dashboard - Internal tools and analytics",
  robots: "noindex, nofollow", // Don't index admin pages
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // This layout excludes the main site Header/Footer
  // by not wrapping children in them
  return (
    <div className="admin-layout">
      {children}
    </div>
  );
}
