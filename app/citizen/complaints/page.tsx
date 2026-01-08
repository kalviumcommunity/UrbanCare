export default function ComplaintsList() {
  return (
    <main style={{ padding: "30px" }}>
      <h2>My Complaints</h2>

      <ul style={{ marginTop: "20px" }}>
        <li>
          <a href="/citizen/complaints/101">Road damage near school</a>
        </li>
        <li>
          <a href="/citizen/complaints/102">Streetlight not working</a>
        </li>
      </ul>
    </main>
  );
}
