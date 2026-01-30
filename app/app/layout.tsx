import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <nav style={{ padding: "10px", background: "#eee" }}>
          <Link href="/">Home</Link> |{" "}
          <Link href="/login">Login</Link> |{" "}
          <Link href="/dashboard">Dashboard</Link> |{" "}
          <Link href="/users/1">User 1</Link>
        </nav>
        {children}
      </body>
    </html>
  );
}