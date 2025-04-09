import Link from "next/link";
import styles from "./navbar.module.css";
import Image from "next/image";
import logo from "../../../images/logo.png";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <Link href="/">
        <Image className={styles.logo} src={logo} alt="logo" />
      </Link>
      <ul className={styles.list}>
        <li className={styles.listItem}>
          <Link className={styles.item} href="/services/home">
            Home
          </Link>
        </li>
        <li className={styles.listItem}>
          <Link className={styles.item} href="/services/plan&drawings">
            Building / Civil Designs
          </Link>
        </li>
        <li className={styles.listItem}>
          <Link className={styles.item} href="/services/plan&drawings">
            Building & Civil Construction
          </Link>
        </li>
        <li className={styles.listItem}>
          <Link className={styles.item} href="/services/renovation&maintenance">
            Building Renovation & Maintenance
          </Link>
        </li>
        <li className={styles.listItem}>
          <Link className={styles.item} href="/services/steel&planning">
            Steel Works & Planning
          </Link>
        </li>
        <li className={styles.listItem}>
          <Link className={styles.item} href="/services/steel&planning">
            Contact Us
          </Link>
        </li>
      </ul>
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
        <Link
          className={styles.icon}
          href="https://web.facebook.com/Lacreteconcept"
        >
          <i className="icon fa-brands fa-square-facebook"></i>
        </Link>
      </ul>
    </div>
  );
};
export default Navbar;


{/* <ul className={styles.socialMediaIcons}>
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
    <Link className={styles.icon} href="https://www.instagram.com/lacrete2025">
      <i className="icon fa-brands fa-square-instagram"></i>
    </Link>
  </li>
  <li className={styles.socialMediaIcon}>
    <Link className={styles.icon} href="https://wa.me/+2348028752742">
      <i className="icon fa-brands fa-square-whatsapp"></i>
    </Link>
  </li>
</ul>; */}
