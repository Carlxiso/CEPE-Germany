import Options from "../Options/Options";
import styles from "./Question.module.css";

export default function Question({ question, dispatch, answers }) {
  console.log("question", question);
  return (
    <div>
      <h1>{question.text}</h1>
      <Options question={question} dispatch={dispatch} answers={answers} />
    </div>
  );
}
