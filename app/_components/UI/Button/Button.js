import Link from "next/link";
import styles from "./Button.module.css";
export default function Button({ children, variant = "primary", href }) {
  if (href) {
    return (
      <Link href={href} className={`${styles.btn} ${styles[variant]}`}>
        {children}
      </Link>
    );
  }
  return (
    <button className={`${styles.btn} ${styles[variant]}`}>{children}</button>
  );
}
