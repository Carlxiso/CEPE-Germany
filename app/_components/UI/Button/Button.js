import Link from "next/link";
import styles from "./Button.module.css";

export default function Button({
  children,
  variant = "primary",
  href,
  type = "button",
  size,
  disabled = false,
  onClick,
}) {
  const className = [
    styles.btn,
    styles[variant],
    size ? styles[size] : "",
    disabled ? styles.disabled : "",
  ]
    .filter(Boolean)
    .join(" ");

  if (href) {
    return (
      <Link href={href} className={className}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={className}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
