"use client";
import Link from "next/link";

export default function Header() {
  return (
    <header style={{ padding: "12px", background: "#2563eb", color: "white" }}>
      <nav style={{ display: "flex", gap: "16px" }}>
        <strong>UrbanCare</strong>
        <Link href="/">Home</Link>
        <Link href="/dashboard">Dashboard</Link>
        <Link href="/login">Login</Link>
      </nav>
    </header>
  );
}