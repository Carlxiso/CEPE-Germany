import styles from "./InstructionsDiagnosticTest.module.css";

export default function InstructionsDiagnosticTest() {
  return (
    <div className={styles.instructions} aria-labelledby="instrucoes-gerais">
      <h2 id="instrucoes-gerais" className={styles.title}>
        Instruções gerais
      </h2>

      <ol className={styles.list}>
        <li>
          Este teste de diagnóstico avalia o seu nível de português europeu de
          acordo com o Quadro Comum Europeu de Referência para as Línguas
          (QCERL), abrangendo os níveis A1 a C1.
        </li>
        <li>
          O teste é composto por questões de escolha múltipla com quatro opções
          (a, b, c, d). Assinale a resposta correta com um X ou círculo.
        </li>
        <li>
          Comece pelo Nível A1. Quando sentir que as questões estão demasiado
          difíceis, pode parar. Não é obrigatório responder a todos os níveis.
        </li>
        <li>
          Não há tempo limite, mas recomenda-se que não demore mais do que 90
          minutos.
        </li>
        <li>Não é permitido o uso de dicionário ou tradutores automáticos.</li>
        <li>
          As secções de Compreensão Oral (Secção E) devem ser realizadas com o
          apoio de material áudio fornecido pelo professor ou descrevem tarefas
          de avaliação oral.
        </li>
        <li>
          Cada resposta correta vale 1 ponto. Respostas erradas não penalizam.
        </li>
      </ol>
    </div>
  );
}
