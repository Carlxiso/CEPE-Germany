"use client";
import { useEffect, useReducer } from "react";
import CTASection from "../../UI/CTASection/CTASection";
import HeaderDiagnosticTest from "./HeaderDiagnosticTest/HeaderDiagnosticTest";
import InstructionsDiagnosticTest from "./InstructionsDiagnosticTest/InstructionsDiagnosticTest";
import Questions from "./Questions/Questions";

const cta = {
  headline:
    "Cada palavra conta. Até que ponto o seu conhecimento abarca a língua portuguesa?",
  text: "A língua portuguesa une culturas, histórias e continentes. Aceite o desafio e descubra até que ponto o seu conhecimento abarca a língua portuguesa. Faça o teste diagnóstico e explore a diversidade, a riqueza e a vitalidade de uma língua verdadeiramente global.",
};

const initialState = {
  questions: [],
  // 'loading', 'error', 'ready', 'active', 'finished'
  status: "loading",
};

function reducer(state, action) {
  switch (action.type) {
    case "dataReceived":
      return {
        ...state,
        questions: action.payload,
        status: "ready",
      };
    case "dataFailed":
      return {
        ...state,
        status: "error",
      };
    default:
      throw new Error("Action Unkonwn");
  }
}
export default function DiagnosticTest() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(function () {
    fetch("http://localhost:3001/questions")
      .then((res) => res.json())
      .then((data) => dispatch({ type: "dataReceived", payload: data }))
      .catch((err) => dispatch({ type: "dataFailed" }));
  }, []);
  return (
    <CTASection headline={cta.headline} text={cta.text}>
      <HeaderDiagnosticTest />
      <Questions />
      <InstructionsDiagnosticTest />
    </CTASection>
  );
}
