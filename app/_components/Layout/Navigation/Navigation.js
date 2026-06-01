"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./navigation.module.css";
import { useState, useEffect, useRef } from "react";

export default function Navigation() {
  const pathName = usePathname();
  const [openHamburger, setOpenHamburger] = useState(false);
  const navRef = useRef(null);

  const toggleMenu = () => setOpenHamburger((prev) => !prev);
  const closeMenu = () => setOpenHamburger(false);

  useEffect(() => {
    function handleClickOutside(e) {
      if (navRef.current && !navRef.current.contains(e.target)) {
        closeMenu();
      }
    }
    if (openHamburger) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("touchstart", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [openHamburger]);

  const navLinks = [
    { href: "/about", label: "Sobre Nós" },
    { href: "/cursos", label: "Cursos" },
    { href: "/blog", label: "Blog" },
    { href: "/contactos", label: "Contactos" },
    { href: "/faq", label: "Suporte" },
  ];

  return (
    <nav className={styles.nav} ref={navRef}>
      {/** - Hamburguer - **/}
      <button
        className={`${styles.hamburger} ${openHamburger ? styles.open : ""}`}
        aria-label="Toggle menu"
        aria-expanded={openHamburger}
        onClick={toggleMenu}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/** - Menu - **/}
      <ul className={`${styles.menu} ${openHamburger ? styles.show : ""}`}>
        {navLinks.map((link) => (
          <li key={link.href}>
            <Link
              className={pathName === link.href ? styles.active : ""}
              href={link.href}
              onClick={closeMenu}
            >
              {link.label}
            </Link>
          </li>
        ))}

        <li className={styles.login}>
          <Link href="/auth/login" onClick={closeMenu}>
            Login
          </Link>
        </li>

        <li className={styles.signup}>
          <Link href="/auth/signup" className={styles.cta} onClick={closeMenu}>
            Sign Up
          </Link>
        </li>
      </ul>
    </nav>
  );
}
