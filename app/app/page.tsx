import styles from "./home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.hero}>
      <h1>Smart City Complaint Portal</h1>
      <p>Report issues. Track progress. Improve your city.</p>

      <div className={styles.actions}>
        <Link href="/auth/signup" className={styles.btnPrimary}>Get Started</Link>
        <Link href="/auth/login" className={styles.btnSecondary}>Login</Link>
      </div>
    </div>
  );
}
