import styles from "./footer.module.css";
import Link from "next/link";
import link from "../../../images/link.png"
import Image from "next/image";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.cardL}>
        <h1 className={styles.title}>Lacrete Concept.</h1>
        <h1 className={styles.linkTitle}>
          <Link href="/contact" passHref>
            <span className={styles.linkText}>Work With Us</span>
            <Image src={link} width={40} height={40} alt="link" />
          </Link>
        </h1>
      </div>
      <div className={styles.cardS}>
        <div className={styles.cardItem}>
          Address: 28, Abiodun Shobanjo Street, Agidingbi, Ikeja, Lagos.
        </div>
        <div className={styles.cardItem}>
          Email: lacreteconcept@gmail.com <br />
          Tel: +234 802 875 2742
        </div>
      </div>
      <div className={styles.cardS}>
        <div className={styles.cardItem}>
          Follow Us:
          <br />
          <ul className={styles.socialMediaIcons}>
            <li className={styles.socialMediaIcon}>
              <Link
                className={styles.icon}
                href="https://web.facebook.com/Lacreteconcept"
              >
                <i className="icon fa-brands fa-square-facebook"></i>
              </Link>
            </li>
            <li className={styles.socialMediaIcon}>
              <Link
                className={styles.icon}
                href="https://www.tiktok.com/@lacrete_concept?_t=ZM-8tR5goUupDp&_r=1"
              >
                <i className="icon fa-brands fa-tiktok"></i>
              </Link>
            </li>
            <li className={styles.socialMediaIcon}>
              <Link
                className={styles.icon}
                href="https://www.instagram.com/lacrete2025"
              >
                <i className="icon fa-brands fa-square-instagram"></i>
              </Link>
            </li>
            <li className={styles.socialMediaIcon}>
              <Link className={styles.icon} href="https://wa.me/+2348028752742">
                <i className="icon fa-brands fa-square-whatsapp"></i>
              </Link>
            </li>
          </ul>
        </div>
        <div className={styles.cardItem}>
          @2025 Lacrete Concept,
          <br />
          All Rights Reserved
        </div>
      </div>
    </div>
  );
};
export default Footer;
