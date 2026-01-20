type Props = {
  params: { id: string }
}

export default function ComplaintDetails({ params }: Props) {
  return (
    <div className="container">
      <h2>Complaint #{params.id}</h2>
    </div>
  );
}
