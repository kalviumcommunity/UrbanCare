import Link from "next/link";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <h2>UrbanCare</h2>

      <div className={styles.links}>
        <Link href="/">Home</Link>
        <Link href="/dashboard">Dashboard</Link>
        <Link href="/citizen/complaints">Complaints</Link>
        <Link href="/auth/login">Login</Link>
      </div>
    </nav>
  );
}
