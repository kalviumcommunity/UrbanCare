import styles from "./page.module.css";

export default function LoginPage() {
  return (
    <div className={styles.container}>
      {/* Left Section */}
      <div className={styles.left}>
        <div className={styles.logo}>UrbanCare</div>

        <h1>Welcome Back</h1>
        <p className={styles.subtitle}>
          Sign in to access your citizen portal
        </p>

        <form className={styles.form}>
          <label>Email Address</label>
          <input type="email" placeholder="you@example.com" />

          <div className={styles.passwordRow}>
            <label>Password</label>
            <a href="#">Forgot password?</a>
          </div>
          <input type="password" placeholder="••••••••" />

          <button type="submit">Sign In</button>
        </form>

        <p className={styles.register}>
          Don’t have an account? <a href="/register">Register here</a>
        </p>
      </div>

      {/* Right Section */}
      <div className={styles.right}>
        <h2>Your Voice Matters</h2>
        <p>
          Report civic issues, track progress, and help build a better city.
          Every complaint brings us closer to transparent governance.
        </p>

        <div className={styles.stats}>
          <span>24/7<br />Available</span>
          <span>100%<br />Transparent</span>
          <span>Secure<br />& Private</span>
        </div>
      </div>
    </div>
  );
}
