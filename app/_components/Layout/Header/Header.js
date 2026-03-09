import styles from "./header.module.css";
import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";

function Header() {
  return (
    <header role="banner" className={styles.header}>
      <div className={styles.headerInner}>
        <Logo />
        <Navigation />
      </div>
    </header>
  );
}

export default Header;
