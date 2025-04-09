import Image from "next/image";
import styles from "./intro.module.css";
import banner1 from "../../../images/banner-1.png";
import portfolio1 from "../../../images/portfolio1.png";
import Circle from "../circle/Circle";

const Intro = () => {
  return (
    <>
      <div className={styles.container}>
        <Circle backgroundColor="#b0ff49" top="-50vh" left="-50vh" />
        <Circle backgroundColor="#25b60f" right="-40vh" />
        <div className={styles.card}>
          <h1 className={styles.title}>
            <span className={styles.brand}>LACRETE</span> CONCEPT CONSTRUCTION
            COMPANY
          </h1>
          <p className={styles.desc}>We deliver top-notch projects</p>
          <button className={styles.button}>DISCOVER</button>
        </div>
        <div className={styles.card}>
          <Image
            className={styles.portfolio1}
            src={portfolio1}
            width={1000}
            height={1000}
            alt="banner1"
          />
        </div>
      </div>
    </>
  );
};
export default Intro;
