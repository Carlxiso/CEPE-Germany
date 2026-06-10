"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "@/app/(dashboard)/dashboard.module.css";
import {
  HiOutlineHome,
  HiOutlineUsers,
  HiOutlineNewspaper,
  HiOutlineChatBubbleLeftRight,
  HiOutlineCheckCircle,
  HiOutlineChartBar,
  HiOutlineBell,
  HiOutlineClipboardDocumentCheck,
  HiOutlineDocumentText,
  HiOutlineAcademicCap,
} from "react-icons/hi2";

const ICONS = {
  home: HiOutlineHome,
  users: HiOutlineUsers,
  news: HiOutlineNewspaper,
  comments: HiOutlineChatBubbleLeftRight,
  check: HiOutlineCheckCircle,
  chart: HiOutlineChartBar,
  bell: HiOutlineBell,
  test: HiOutlineClipboardDocumentCheck,
  document: HiOutlineDocumentText,
  academic: HiOutlineAcademicCap,
};

export default function DashNav({ items = [] }) {
  const pathname = usePathname();

  return (
    <nav className={styles.nav}>
      <ul>
        {items.map((item) => {
          const Icon = ICONS[item.icon];

          const isRoot = item.href.split("/").filter(Boolean).length === 1;
          const isActive = isRoot
            ? pathname === item.href
            : pathname === item.href || pathname.startsWith(item.href + "/");

          return (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`${styles.navLink} ${
                  isActive ? styles.navLinkActive : ""
                }`}
                aria-current={isActive ? "page" : undefined}
              >
                <span className={styles.icon}>{Icon && <Icon />}</span>
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
