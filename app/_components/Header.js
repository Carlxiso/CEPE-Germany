import Navigation from "@/app/_components/Navigation";
import Logo from "@/app/_components/Logo";
import styles from "./header.module.css";

function Header() {
  return (
    <header role="banner" className={styles.header}>
      <div className={styles.container}>
        <Logo />
        <Navigation />
      </div>
    </header>
  );
}

export default Header;
