"use client";
import { useEffect, useReducer } from "react";
import { supabase } from "@/app/_lib/auth/supabase";
import CTASection from "../../UI/CTASection/CTASection";
import HeaderDiagnosticTest from "./HeaderDiagnosticTest/HeaderDiagnosticTest";
import InstructionsOverlay from "./InstructionsOverlay/InstructionsOverlay";
import Loading from "./Loading/Loading";
import Error from "./Error/Error";
import StartTest from "./StartTest/StartTest";
import Question from "./Question/Question";
import NextQuestionButton from "./NextQuestionButton/NextQuestionButton";
import Progress from "./Progress/Progress";
import FinishedScreen from "./FinishedScreen/FinishedScreen";
import Timer from "./Timer/Timer";
import FooterTest from "./FooterTest/FooterTest";
import styles from "./DiagnosticTest.module.css";

const SECS_PER_QUESTION = 30;
const cta = {
  headline:
    "Cada palavra conta. Até que ponto o seu conhecimento abarca a língua portuguesa?",
  text: "A língua portuguesa une culturas, histórias e continentes. Aceite o desafio e descubra até que ponto o seu conhecimento abarca a língua portuguesa. Faça o teste diagnóstico e explore a diversidade, a riqueza e a vitalidade de uma língua verdadeiramente global.",
};

const initialState = {
  questions: [],
  // 'loading', 'error', 'ready', 'active', 'finished'
  status: "loading",
  index: 0,
  answers: null,
  userAnswers: [],
  result: null,
  secondsRemaining: 10,
};

function reducer(state, action) {
  switch (action.type) {
    case "dataReceived":
      return { ...state, questions: action.payload, status: "ready" };
    case "dataFailed":
      return { ...state, status: "error" };
    case "start":
      return {
        ...state,
        status: "active",
        secondsRemaining: state.questions.length * SECS_PER_QUESTION,
      };
    case "newAnswer": {
      const question = state.questions.at(state.index);
      return {
        ...state,
        answers: action.payload,
        userAnswers: [
          ...state.userAnswers.filter((a) => a.question_id !== question.id),
          { question_id: question.id, chosen_option: action.payload },
        ],
      };
    }
    case "nextQuestion":
      return { ...state, index: state.index + 1, answers: null };
    case "finish":
      return { ...state, status: "finished" };
    case "setResult":
      return { ...state, result: action.payload };
    case "restart":
      return {
        ...state,
        status: "ready",
        index: 0,
        answers: null,
        userAnswers: [],
        result: null,
      };
    case "timer":
      return {
        ...state,
        secondsRemaining: state.secondsRemaining - 1,
        status: state.secondsRemaining === 0 ? "finished" : state.status,
      };
    default:
      throw new Error("Ação desconhecida");
  }
}

export default function DiagnosticTest() {
  const [
    {
      questions,
      status,
      index,
      answers,
      userAnswers,
      result,
      secondsRemaining,
    },
    dispatch,
  ] = useReducer(reducer, initialState);

  const numQuestions = questions.length;
  const maxPossiblePoints = questions.reduce(
    (prev, current) => prev + current.points,
    0,
  );

  // Fetch Questions — SÓ colunas seguras (a resposta certa fica no servidor).
  useEffect(() => {
    async function loadQuestions() {
      const { data, error } = await supabase
        .from("questions")
        .select("id, text:section, question, options, points")
        .order("id");

      if (error) {
        console.error("Erro ao buscar perguntas:", error);
        dispatch({ type: "dataFailed" });
      } else {
        dispatch({ type: "dataReceived", payload: data });
      }
    }
    loadQuestions();
  }, []);

  useEffect(() => {
    if (status !== "finished" || result !== null) return;

    async function grade() {
      const { data, error } = await supabase.rpc("grade_diagnostic", {
        answers: userAnswers,
      });

      if (error) {
        console.error("Erro ao corrigir:", error);
        dispatch({ type: "setResult", payload: { error: true } });
      } else {
        dispatch({ type: "setResult", payload: data });
      }
    }
    grade();
  }, [status, result, userAnswers]);

  return (
    <CTASection headline={cta.headline} text={cta.text}>
      <div className={styles.frame}>
        <div className={styles.header}>
          <HeaderDiagnosticTest />
        </div>

        <div className={styles.body}>
          {status === "loading" && <Loading />}
          {status === "error" && <Error />}
          {status === "ready" && (
            <StartTest numQuestions={numQuestions} dispatch={dispatch} />
          )}
          {status === "active" && (
            <>
              <Progress
                index={index + 1}
                numQuestions={numQuestions}
                answers={answers}
              />
              <Question
                question={questions[index]}
                dispatch={dispatch}
                answers={answers}
              />
            </>
          )}
          {status === "finished" && (
            <FinishedScreen
              dispatch={dispatch}
              result={result}
              maxPossiblePoints={maxPossiblePoints}
            />
          )}
        </div>

        {status === "active" && (
          <div className={styles.footer}>
            <FooterTest>
              <Timer dispatch={dispatch} secondsRemaining={secondsRemaining} />
              <NextQuestionButton
                dispatch={dispatch}
                index={index}
                numQuestions={numQuestions}
                answers={answers}
              />
            </FooterTest>
          </div>
        )}
      </div>
      <InstructionsOverlay />
    </CTASection>
  );
}
