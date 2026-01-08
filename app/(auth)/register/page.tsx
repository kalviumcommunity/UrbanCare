export default function RegisterPage() {
  return (
    <main className="center">
      <form className="card">
        <h2>Register</h2>

        <input placeholder="Full Name" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />

        <button>Create Account</button>
      </form>
    </main>
  );
}
