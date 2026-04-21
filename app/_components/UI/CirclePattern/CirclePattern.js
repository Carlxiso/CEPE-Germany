import styles from "./CirclePattern.module.css";

export default function CirclePattern() {
  const count = 48;

  return (
    <div className={styles.wrapper}>
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className={styles.tile}>
          <img src="/circle-pattern.svg" alt="Circle Pattern" />
        </div>
      ))}
    </div>
  );
}

//  return (
//     <div className={styles.wrapper}>
//       {Array.from({ length: count }).map((_, i) => (
//         <div key={i} className={styles.tile}>
//           <Image src={circlePattern} alt={circlePattern} />
//         </div>
//       ))}
//     </div>
//   );
