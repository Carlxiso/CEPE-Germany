import Container from "../_components/Layout/Container/Container";

export const metadata = {
  title: "Blog",
};
export default function Page() {
  return (
    <div>
      <Container>
        <h1 className="text-3xl font-bold underline">Blog Page</h1>
      </Container>
    </div>
  );
}
