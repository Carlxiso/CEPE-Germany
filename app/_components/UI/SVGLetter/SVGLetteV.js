import styles from "./SVGLetter.module.css";
import stylesGraphic from "../../UI/Grid/GridSideGraphic.module.css";
export default function SVGLetterV() {
  return (
    <svg
      id="v"
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      viewBox="0 0 312.6 392.5"
      className={stylesGraphic.svg}
    >
      <circle className={stylesGraphic.st2v} cx="39.5" cy="43.9" r="3.2" />
      <path
        className={`${stylesGraphic.st1v} ${stylesGraphic.path}`}
        d="M156.3,294.4L240.9,33.9h63.6l-119.8,333h-56L9.2,33.9h63.3l83.7,260.5Z"
      />
      <path
        className={stylesGraphic.st0v}
        d="M276,41.8l-111.9,299.4h-13.9L38.4,42.1"
      />
    </svg>
  );
}
