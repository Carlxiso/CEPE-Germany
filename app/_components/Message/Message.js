import Image from "next/image";
import styles from "./Message.module.css";

export default function Message({ children }) {
  return <div className={styles.about}>{children}</div>;
}

Message.Image = function ImageSlot({ src, alt, sizes }) {
  return (
    <div className={styles.aboutLeft}>
      <Image
        src={src}
        alt={alt}
        width={600}
        height={900}
        sizes={sizes ?? "(max-width: 768px) 100vw, 50vw"}
        className={styles.aboutImage}
      />
    </div>
  );
};

Message.Content = function ContentSlot({ children }) {
  return <div className={styles.aboutRight}>{children}</div>;
};

Message.Text = function TextSlot({ children }) {
  return <p className={styles.text}>{children}</p>;
};

Message.Signature = function SignatureSlot({ src, alt, name, role }) {
  return (
    <div className={styles.signature}>
      {src && (
        <Image
          src={src}
          alt={alt ?? ""}
          width={100}
          height={70}
          className={styles.signatureImage}
        />
      )}
      {name && <p className={styles.signatureName}>{name}</p>}
      {role && <p className={styles.signatureRole}>{role}</p>}
    </div>
  );
};
