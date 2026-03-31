import Container from "../_components/Layout/Container/Container";
import Footer from "../_components/Layout/Footer/Footer";
import Maintenance from "../_components/Maintenance/Maintenance";
import Button from "../_components/UI/Button/Button";

export const metadata = {
  title: "Blog",
};
export default function Page() {
  return (
    <>
      <Maintenance section="Blog" />
      <Footer />
    </>
  );
}
