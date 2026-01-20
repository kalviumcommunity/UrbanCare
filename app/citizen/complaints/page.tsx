import Link from "next/link";

export default function ComplaintsList() {
  return (
    <div className="container">
      <h2>Your Complaints</h2>

      <Link href="/citizen/complaints/new">
        ➕ Register New Complaint
      </Link>

      <ul style={{ marginTop: "20px" }}>
        <li>
          <Link href="/citizen/complaints/123">
            Street Light Not Working
          </Link>
        </li>
      </ul>
    </div>
  );
}
