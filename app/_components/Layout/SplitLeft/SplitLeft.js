import Image from "next/image";
import styles from "./SplitLeft.module.css";

// const aboutContent = [
//   {
//     src: "./img.png",
//     alt: "name",
//     title: "Coordenação do ensino Portugues no estranhgeiro na Alemanha",
//   },
// ];
export default function SplitLeft({
  src,
  alt,
  title,
  text,
  fullscreen = false,
}) {
  return (
    <div className={`${styles.split} ${fullscreen ? styles.full : ""}`}>
      <div className={styles.image}>
        <Image src={src} fill alt={alt} className={styles.imageElement} />
      </div>

      <div className={styles.content}>
        <div className={styles.innerContent}>
          <h2>{title}</h2>
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
}
//   return (
//     <div className={`${styles.split} ${fullscreen ? styles.full : ""}`}>
//       <div className={styles.image}>
//         <Image src={src} fill alt={alt} className={styles.imageElement} />
//       </div>

//       <div className={styles.content}>
//         <div className={styles.innerContent}>
//           <h2>{title}</h2>
//           <p>{text}</p>
//         </div>
//       </div>
//     </div>
//   );
// }
