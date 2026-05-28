import styles from "./header.module.css";
import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";

function Header() {
  return (
    <header role="banner" className={styles.headerContainer}>
      <div className={styles.headerInner}>
        <div className={styles.header}>
          <Logo />
          <Navigation />
        </div>
      </div>
    </header>
  );
}

export default Header;
