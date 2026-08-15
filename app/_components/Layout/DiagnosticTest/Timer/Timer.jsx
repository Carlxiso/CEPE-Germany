import { useEffect } from "react";
import styles from "./Timer.module.css";

export default function Timer({ dispatch, secondsRemaining }) {
  const minutes = Math.floor(secondsRemaining / 60);
  const seconds = secondsRemaining % 60;

  useEffect(
    function () {
      const id = setInterval(function () {
        dispatch({ type: "timer" });
      }, 1000);
      return () => {
        clearInterval(id);
      };
    },
    [dispatch],
  );
  return (
    <div className={styles.timer}>
      {minutes < 10 && "0"}
      {minutes.toString().padStart(2, "0")}:{seconds < 10 && "0"}
      {seconds.toString().padStart(2, "0")}
    </div>
  );
}
