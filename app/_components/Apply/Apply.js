import styles from "./Apply.module.css";

export default function Apply() {
  return (
    <div>
      <h1>Junta-te a nós!</h1>
      <h3>
        Vêm fazer parte desta rede e contribuir para o sensino de umas das
        línguas mais faladas no mundo.
      </h3>
      <p>
        Todas as candidaturas estao sujeitoas a um processo de concursos publico
        e publicado no diario da republica sempre que um concursos publico abre.
      </p>
      <div className={styles.applyCard}>
        <div className={styles.plus}>+</div>
        <p>Candidatura Espontânea (Professor)</p>
      </div>
    </div>
  );
}
