"use client";

import { useAuth } from "@/hooks/useAuth";
import { useUI } from "@/hooks/useUI";

export default function Home() {
  const { user, login, logout, isAuthenticated } = useAuth();
  const { theme, toggleTheme, sidebarOpen, toggleSidebar } = useUI();

  return (
    <main
      style={{
        padding: "20px",
        background: theme === "dark" ? "#111" : "#fff",
        color: theme === "dark" ? "#fff" : "#000",
        minHeight: "100vh",
      }}
    >
      <h1>Context & Hooks Demo</h1>

      <hr />

      <h2>Auth Section</h2>
      {isAuthenticated ? (
        <>
          <p>Logged in as: {user}</p>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <button onClick={() => login("KalviumUser")}>Login</button>
      )}

      <hr />

      <h2>UI Section</h2>
      <p>Theme: {theme}</p>
      <button onClick={toggleTheme}>Toggle Theme</button>

      <br /><br />

      <button onClick={toggleSidebar}>
        {sidebarOpen ? "Close Sidebar" : "Open Sidebar"}
      </button>
    </main>
  );
}