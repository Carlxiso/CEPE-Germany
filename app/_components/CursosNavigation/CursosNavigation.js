"use client";

import { useState } from "react";
import styles from "./CursosNavigation.module.css";

export default function CursosNavigation({ tabs }) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className={styles.tabs}>
      {/* NAV */}
      <div className={styles.nav}>
        {tabs.map((tab, index) => (
          <button
            key={tab.label}
            className={`${styles.tabButton} ${
              activeIndex === index ? styles.active : ""
            }`}
            onClick={() => setActiveIndex(index)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* CONTENT */}
      <div className={styles.contentWrapper}>
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={`${styles.content} ${
              activeIndex === index ? styles.show : styles.hide
            }`}
          >
            {tab.content}
          </div>
        ))}
      </div>
    </div>
  );
}

// import Link from "next/link";

// const navlinks = [
//   { name: "NavLink1", href: "/account" },
//   { name: "NavLink2", href: "/account" },
//   { name: "NavLink3", href: "/account" },
// ];

// export default function CursosNavigation() {
//   return (
//     <nav>
//       <ul>
//         {navlinks.map((link) => (
//           <li key={link.name}>
//             <Link href={link.href}>
//               <span>{link.name}</span>
//             </Link>
//           </li>
//         ))}
//       </ul>
//     </nav>
//   );
// }
