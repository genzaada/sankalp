import React from "react";

export const metadata = {
  title: "Admin Dashboard | ICAMIDA 2027",
  description: "Management panel for ICAMIDA 2027 Conference Workflow",
};

export default function AdminLayout({ children }) {
  return (
    <div className="admin-root-wrapper">
      {children}
    </div>
  );
}
