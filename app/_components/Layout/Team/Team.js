import Image from "next/image";
import styles from "./Team.module.css";
import RotatingCircule from "../../UI/RotatingCircule/RotatingCircule";
import DividerSection from "../../DividerSection/DividerSection";
import { team } from "@/app/_lib/team";

export default function Team() {
  return (
    <div>
      <DividerSection
        title="Equipa da Coordenação"
        subtitle="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
        variant="center"
      />

      <div className={styles.teamGrid}>
        {team.map((member) => (
          <div key={member.email} className={styles.card}>
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
            <h3 className={styles.name}>{member.name}</h3>
            <a href={`mailto:${member.email}`} className={styles.email}>
              {member.email}
            </a>
            <p className={styles.location}>{member.location}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
