
import Image from "next/image";
import Slider from "./components/slider/Slider";
import Welcome from "./components/welcome/Welcome";
import Why from "./components/why/Why";
import Testimonial from "./components/testimonial/Testimonial";
import Services from "./services/page";


export default function Home() {
  return (
    <>
      <Slider />
      <Welcome />
      <Why />
      <Testimonial />
      <Services />
    </>
  );
}
