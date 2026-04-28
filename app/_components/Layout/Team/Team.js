import Image from "next/image";
import styles from "./Team.module.css";
import RotatingCircule from "../../UI/RotatingCircule/RotatingCircule";
import DividerSection from "../../DividerSection/DividerSection";

const team = [
  {
    name: "Ana Silva",
    email: "ana@example.com",
    location: "Lisboa, Portugal",
    image: "/girl-avatar.svg",
  },
  {
    name: "João Costa",
    email: "joao@example.com",
    location: "Porto, Portugal",
    image: "/man-avatar.svg",
  },
  {
    name: "Maria Santos",
    email: "maria@example.com",
    location: "Coimbra, Portugal",
    image: "/woman-avatar.svg",
  },
  {
    name: "Pedro Rocha",
    email: "pedro@example.com",
    location: "Braga, Portugal",
    image: "/boy-avatar.svg",
  },
];

export default function Team() {
  return (
    <>
      <section className={styles.teamSection}>
        <DividerSection
          title="Equipa da Coordenação"
          subtitle="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
          variant="center"
        />

        <div className={styles.teamGrid}>
          {team.map((member, index) => (
            <div key={index} className={styles.card}>
              {/* Círculo rotativo atrás do avatar */}
              <div className={styles.avatarWrapper}>
                <RotatingCircule />

                <Image
                  src={member.image}
                  alt={member.name}
                  width={150}
                  height={150}
                  className={styles.avatar}
                />
              </div>
              {/* Círculo rotativo atrás do avatar */}
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
