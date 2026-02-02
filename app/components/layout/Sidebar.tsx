"use client";
import Link from "next/link";

export default function Sidebar() {
  return (
    <aside
      style={{
        width: "220px",
        background: "#f3f4f6",
        padding: "16px",
      }}
    >
      <h3>Menu</h3>
      <ul style={{ listStyle: "none", padding: 0 }}>
        <li><Link href="/dashboard">Dashboard</Link></li>
        <li><Link href="/users/1">Users</Link></li>
        <li><Link href="/settings">Settings</Link></li>
      </ul>
    </aside>
  );
}