async function getData() {
  // Simulate slow network
  await new Promise((resolve) => setTimeout(resolve, 2000));

  // Simulate success data
  return [{ id: 1, name: "Vijayashree" }];
}

export default async function UsersPage() {
  const data = await getData();

  if (!data) {
    throw new Error("Failed to load user data");
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2>Users</h2>
      {data.map((user) => (
        <p key={user.id}>{user.name}</p>
      ))}
    </div>
  );
}
