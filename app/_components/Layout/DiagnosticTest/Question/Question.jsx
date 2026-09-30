import Options from "../Options/Options";
import styles from "./Question.module.css";

export default function Question({ question, dispatch, answers }) {
  // console.log("question", question);
  return (
    <div className={styles.questionbox}>
      <h1 className={styles.section}>{question.text}</h1>
      <h2 className={styles.question}>{question.question}</h2>
      <Options question={question} dispatch={dispatch} answers={answers} />
    </div>
  );
}
