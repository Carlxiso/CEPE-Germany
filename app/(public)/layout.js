import Header from "@/app/_components/Layout/Header/Header";

export default function PublicLayout({ children }) {
  return (
    <>
      <Header />
      <main className="container">{children}</main>
    </>
  );
}
