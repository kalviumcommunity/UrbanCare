import Link from "next/link";

export default function Home() {
  return (
    <main style={styles.container}>
      <h1>Urban Care</h1>
      <p>Transparent & accountable urban grievance redressal</p>

      <div style={styles.actions}>
        <Link href="/login" style={styles.primary}>
          Login
        </Link>

        <Link href="/register" style={styles.secondary}>
          Register
        </Link>
      </div>
    </main>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column" as const,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center" as const,
    gap: "20px",
  },
  actions: {
    display: "flex",
    gap: "16px",
  },
  primary: {
    background: "#2563eb",
    color: "white",
    padding: "12px 24px",
    borderRadius: "6px",
    textDecoration: "none",
  },
  secondary: {
    background: "#e5e7eb",
    padding: "12px 24px",
    borderRadius: "6px",
    textDecoration: "none",
    color: "black",
  },
};
