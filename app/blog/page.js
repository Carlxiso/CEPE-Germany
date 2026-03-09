import Container from "../_components/Layout/Container/Container";
import Button from "../_components/UI/Button/Button";

export const metadata = {
  title: "Blog",
};
export default function Page() {
  return (
    <div>
      <Container>
        <h1 className="text-3xl font-bold underline">Blog Page</h1>
        <Button variant="primary">BTN PRIMARY</Button>
        <Button variant="secondary">BTN SECONDARY</Button>
        <Button variant="outline">BTN OUTLINE</Button>
        <Button variant="ghost">BTN GHOST</Button>
      </Container>
    </div>
  );
}
