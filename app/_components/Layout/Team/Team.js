import Image from "next/image";
import styles from "./Team.module.css";

const team = [
  {
    name: "Ana Silva",
    email: "ana@example.com",
    location: "Lisboa, Portugal",
    image: "/testicon.png",
  },
  {
    name: "João Costa",
    email: "joao@example.com",
    location: "Porto, Portugal",
    image: "/testicon.png",
  },
  {
    name: "Maria Santos",
    email: "maria@example.com",
    location: "Coimbra, Portugal",
    image: "/testicon.png",
  },
  {
    name: "Pedro Rocha",
    email: "pedro@example.com",
    location: "Braga, Portugal",
    image: "/testicon.png",
  },
];

export default function Team() {
  return (
    <>
      <section className={styles.teamSection}>
        <h2 className={styles.teamTitle}>Equipa da Coordenação</h2>

        <div className={styles.teamGrid}>
          {team.map((member, index) => (
            <div key={index} className={styles.card}>
              <Image
                src={member.image}
                alt={member.name}
                width={150}
                height={150}
                className={styles.avatar}
              />
              <h3 className={styles.name}>{member.name}</h3>
              <a href={`mailto:${member.email}`} className={styles.email}>
                {member.email}
              </a>
              <p className={styles.location}>{member.location}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
