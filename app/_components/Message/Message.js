import Image from "next/image";
import styles from "./Message.module.css";

export default function Message({ children }) {
  return <div className={styles.about}>{children}</div>;
}

Message.Image = function ImageSlot({ src, alt }) {
  return (
    <div className={styles.aboutLeft}>
      <Image src={src} alt={alt} fill />
    </div>
  );
};

Message.Content = function Content({ children }) {
  return <div className={styles.aboutRigth}>{children}</div>;
};
