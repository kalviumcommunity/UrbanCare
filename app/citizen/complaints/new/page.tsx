export default function NewComplaint() {
  return (
    <main style={styles.container}>
      <h2>Register New Complaint</h2>

      <form style={styles.form}>
        <input placeholder="Complaint Title" />
        <textarea placeholder="Describe the issue" rows={4} />
        <input type="file" />
        <button>Submit Complaint</button>
      </form>
    </main>
  );
}

const styles = {
  container: {
    padding: "30px",
  },
  form: {
    marginTop: "20px",
    maxWidth: "400px",
    display: "flex",
    flexDirection: "column" as const,
    gap: "12px",
  },
};
