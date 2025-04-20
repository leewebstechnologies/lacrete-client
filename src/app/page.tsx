import Intro from "./components/intro/Intro";
import Services from "./components/services/Services";
import Testimonials from "./components/testimonials/Testimonials";
import { services } from "./data";
// import { data } from "../app/data";

export default function Home() {
  return (
    <>
      <Intro />
      <Services />
      <Testimonials />
    </>
  );
}

// export const getStaticProps = async () => {
//   const services = data;
//   return {
//     props: { services },
//   };
// };
