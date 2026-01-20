export default function NewComplaint() {
  return (
    <div className="container">
      <h2>New Complaint</h2>
      <input placeholder="Complaint Title" />
      <textarea placeholder="Description"></textarea>
      <button>Submit</button>
    </div>
  );
}
