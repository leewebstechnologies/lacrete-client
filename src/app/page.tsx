import Intro from "./components/intro/Intro";
import Services from "./components/services/Services";
// import { data } from "../app/data";

export default function Home() {
  return (
    <>
      <Intro />
      <Services />
    </>
  );
}

// export const getStaticProps = async () => {
//   const services = data;
//   return {
//     props: { services },
//   };
// };
