import Link from "next/link";
import "./navbar.css";
import Image from "next/image";
import logo from "../../../images/logo.png";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg fixed-top">
        <div className="container-fluid">
          <Link className="navbar-brand" href="/">
            <Image src={logo} alt="logo" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" href="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/services">
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/blog">
                  Blog
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/contact">
                  Contact
                </Link>
              </li>
            </ul>
            <div className="navbarRight">
              <Link href="https://web.facebook.com/Lacreteconcept">
                <i className="icon fa-brands fa-square-facebook"></i>
              </Link>
              <Link href="https://www.tiktok.com/@lacrete_concept?_t=ZM-8tR5goUupDp&_r=1">
                <i className="icon fa-brands fa-tiktok"></i>
              </Link>
              <Link href="https://www.instagram.com/lacrete2025">
                <i className="icon fa-brands fa-square-instagram"></i>
              </Link>
              <Link href="https://wa.me/+2348028752742">
                <i className="icon fa-brands fa-square-whatsapp"></i>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Navbar;



