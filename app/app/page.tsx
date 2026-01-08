export default function Home() {
  return (
    <main style={styles.container}>
      <h1 style={styles.title}>Urban Care</h1>

      <p style={styles.text}>
        Transparent & accountable urban grievance redressal
      </p>

      <div style={styles.actions}>
        <a href="/login" style={styles.primary}>Login</a>
        <a href="/register" style={styles.secondary}>Register</a>
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
    backgroundColor: "#f4f6f8",
  },
  title: {
    fontSize: "3rem",
    marginBottom: "10px",
  },
  text: {
    maxWidth: "480px",
    marginBottom: "30px",
    color: "#555",
  },
  actions: {
    display: "flex",
    gap: "15px",
  },
  primary: {
    backgroundColor: "#2563eb",
    color: "#ffffff",
    padding: "12px 24px",
    borderRadius: "6px",
    textDecoration: "none",
  },
  secondary: {
    backgroundColor: "#e5e7eb",
    color: "#111",
    padding: "12px 24px",
    borderRadius: "6px",
    textDecoration: "none",
  },
};
