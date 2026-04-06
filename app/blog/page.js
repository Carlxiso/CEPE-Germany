import Footer from "../_components/Layout/Footer/Footer";
import Section from "../_components/Layout/Section/Section";
import Maintenance from "../_components/Maintenance/Maintenance";

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
