export default function ActionButtons({ role }) {
  return (
    <div>
      {role === "admin" && <button>Delete</button>}
      {["admin", "editor"].includes(role) && <button>Edit</button>}
      <button>View</button>
    </div>
  );
}
