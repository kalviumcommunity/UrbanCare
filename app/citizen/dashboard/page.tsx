export default function CitizenDashboard() {
  return (
    <main style={{ padding: "30px" }}>
      <h2>Citizen Dashboard</h2>

      <div style={{ marginTop: "20px", display: "flex", gap: "16px" }}>
        <a href="/citizen/complaints">View Complaints</a>
        <a href="/citizen/complaints/new">New Complaint</a>
      </div>
    </main>
  );
}
