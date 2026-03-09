import Button from "./Button";

const meta = {
  title: "UI/Button",
  component: Button,
};

export default meta;

export const Default = () => <Button />;

export const Primary = () => <Button>Button</Button>;

export const Secondary = () => <Button variant="secondary">Button</Button>;

export const Outline = () => <Button variant="outline">Button</Button>;

export const Small = () => <Button size="sm">Small Button</Button>;
export const Medium = () => <Button size="md">Medium Button</Button>;
export const Large = () => <Button size="lg">Large Button</Button>;
