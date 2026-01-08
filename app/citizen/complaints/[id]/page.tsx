type Props = {
  params: {
    id: string;
  };
};

export default function ComplaintDetails({ params }: Props) {
  return (
    <main style={{ padding: "30px" }}>
      <h2>Complaint Details</h2>

      <p><strong>Complaint ID:</strong> {params.id}</p>
      <p><strong>Status:</strong> In Progress</p>
      <p><strong>Description:</strong> Road damage reported near school area.</p>
    </main>
  );
}
