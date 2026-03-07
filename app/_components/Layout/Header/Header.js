import styles from "./header.module.css";
import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";

function Header() {
  return (
    <header role="banner" className={styles.header}>
      <Logo />
      <Navigation />
    </header>
  );
}

export default Header;
