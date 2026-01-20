import styles from "../auth.module.css";

export default function Signup() {
  return (
    <div className={styles.authBox}>
      <h2>Sign Up</h2>
      <input placeholder="Name" />
      <input placeholder="Email" />
      <input placeholder="Password" type="password" />
      <button>Create Account</button>
    </div>
  );
}
