import styles from "./FooterTest.module.css";

export default function FooterTest({ children }) {
  return <footer className={styles.footer}>{children}</footer>;
}
