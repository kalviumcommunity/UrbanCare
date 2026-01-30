"use client";

import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

export default function Login() {
  const router = useRouter();

  const handleLogin = () => {
    Cookies.set("token", "mock.jwt.token");
    router.push("/dashboard");
  };

  return (
    <main style={{ padding: "20px" }}>
      <h2>Login Page</h2>
      <button onClick={handleLogin}>Login</button>
    </main>
  );
}