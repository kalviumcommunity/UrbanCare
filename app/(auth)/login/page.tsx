import styles from "../auth.module.css";

export default function Login() {
  return (
    <div className={styles.authBox}>
      <h2>Login</h2>
      <input placeholder="Email" />
      <input placeholder="Password" type="password" />
      <button>Login</button>
    </div>
  );
}
