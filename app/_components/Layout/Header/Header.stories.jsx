import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";
import Header from "./Header";

const meta = {
  title: "Layout/Header",
  component: Header,
  subcomponents: { Logo, Navigation },
  tags: ["autodocs"],
};

export default meta;

export const Default = () => <Header />;

export const WithBackground = () => (
  <div style={{ background: "#f4f4f4", padding: "40px" }}>
    <Header />
  </div>
);
