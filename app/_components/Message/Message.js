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
        fill
        sizes={sizes ?? "(max-width: 768px) 100vw, 50vw"}
      />
    </div>
  );
};

Message.Content = function Content({ children }) {
  return <div className={styles.aboutRigth}>{children}</div>;
};
