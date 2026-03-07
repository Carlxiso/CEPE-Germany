import Header from "./Header";

export default meta = {
  title: "Layout/Header",
  component: Header,
  subcomponents: { Logo, Navigation },
};

export const Default = () => <Header />;
