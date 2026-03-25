import CursosNavigation from "../../CursosNavigation/CursosNavigation";
import styles from "./Map.module.css";

export default function Map({ data, reverse = false }) {
  const tabs = [
    {
      label: "Cursos",
      content: (
        <ul>
          {data.courses?.length ? (
            data.courses.map((course) => (
              <li key={course.slug}>{course.name}</li>
            ))
          ) : (
            <p>Sem cursos disponíveis</p>
          )}
        </ul>
      ),
    },
    {
      label: "Informação",
      content: <p>{data.text}</p>,
    },
    {
      label: "Comunidade",
      content: <p>{data.textComunity}</p>,
    },
  ];

  return (
    <div className={styles.mapSection}>
      <div className={`${styles.container} ${reverse ? styles.reverse : ""}`}>
        {/* LEFT (INFO) */}
        <div className={styles.info}>
          <h2 className={styles.title}>{data.name}</h2>
          <p>{data.textName}</p>
          <div className={styles.cursosNavigation}>
            <CursosNavigation tabs={tabs} />
          </div>
        </div>

        {/* RIGHT (MAP) */}
        <div className={styles.map}>{data.map}</div>
      </div>
    </div>
  );
}
