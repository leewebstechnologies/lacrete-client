import logo from "../../../images/logo.png";
import Link from "next/link";
import styles from "./navbar.module.css";
import Image from "next/image";

const links = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "About",
    url: "/about",
  },
  {
    id: 3,
    title: "Services",
    url: "/services",
  },
  {
    id: 4,
    title: "Projects",
    url: "/projects",
  },
  {
    id: 5,
    title: "Blog",
    url: "/blog",
  },
  {
    id: 6,
    title: "Contact",
    url: "/contact",
  },
];

const Navbar = () => {
  return (
    <header className="main-header">
      <div className="header-top">
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-sm-6 col-xs-6">
              <div className="user-wrap">
                <span>
                  <a href="https://wa.me/234 802 875 2742">+234 802 875 2742</a>
                </span>
                <div className="clearfix" />
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div className="top-left">
                <p>Welcome to Lacrete Concept</p>
              </div>
            </div>
            <div className="col-md-5 col-sm-6 col-xs-6">
              <ul className="top-social-icons">
                <li>
                  <a href="#.">
                    <i className="fa fa-facebook-square" aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <a href="#.">
                    <i className="fa fa-twitter-square" aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <a href="#.">
                    <i
                      className="fa fa-google-plus-square"
                      aria-hidden="true"
                    />
                  </a>
                </li>
                <li>
                  <a href="#.">
                    <i className="fa fa-linkedin-square" aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <a href="#.">
                    <i className="fa fa-vimeo-square" aria-hidden="true" />
                  </a>
                </li>
              </ul>
              <div className="btn-box">
                <button
                  data-dismiss="modal"
                  aria-label="Close"
                  data-toggle="modal"
                  data-target=".bs-example-modal-md-2"
                  className="brochure-btn theme-btn hvr-link"
                >
                  Get A Quote
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="header-lower">
        <div className="container">
          <div className="row">
            <div className="col-md-5 col-sm-12">
              <div className="logo-outer">
                <div className="logo">
                  <a href="index.html">
                    <img
                      className="logo-default"
                      src="images/logo-default.png"
                      alt=""
                      title=""
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-7 col-sm-12">
              <div className="nav-outer clearfix menu-bg">
                <nav className="main-menu">
                  <div className="navbar-header">
                    <button
                      type="button"
                      className="navbar-toggle"
                      data-toggle="collapse"
                      data-target=".navbar-collapse"
                    >
                      <span className="icon-bar" />{" "}
                      <span className="icon-bar" />{" "}
                      <span className="icon-bar" />{" "}
                    </button>
                  </div>
                  <div className="navbar-collapse collapse clearfix">
                    <ul className="navigation clearfix">
                      <li className="current">
                        <a className="hvr-link" href="/">
                          Home
                        </a>
                      </li>
                      <li>
                        <a className="hvr-link" href="/about">
                          About
                        </a>
                      </li>
                      <li>
                        <a className="hvr-link" href="/services">
                          Services
                        </a>
                      </li>
                      <li>
                        <a className="hvr-link" href="/projects">
                          Projects
                        </a>
                      </li>
                      <li>
                        <a className="hvr-link" href="/blog">
                          Blog
                        </a>
                      </li>
                      <li>
                        <a className="hvr-link" href="/contact">
                          Contact
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="clearfix" />
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="sticky-header">
        <div className="container clearfix">
          <div className="row">
            <div className="col-md-5 col-sm-5">
              <div className="logo">
                {" "}
                <a href="#" className="img-responsive">
                  <img
                    className="logo-default"
                    src="images/logo-default.png"
                    alt=""
                    title=""
                  />
                </a>{" "}
              </div>
            </div>
            <div className="col-md-7 col-sm-7">
              <nav className="main-menu">
                <div className="navbar-header">
                  <button
                    type="button"
                    className="navbar-toggle"
                    data-toggle="collapse"
                    data-target=".navbar-collapse"
                  >
                    {" "}
                    <span className="icon-bar" /> <span className="icon-bar" />{" "}
                    <span className="icon-bar" />{" "}
                  </button>
                </div>
                <div className="navbar-collapse collapse clearfix">
                  <ul className="navigation clearfix">
                    <li className="current">
                      <a className="hvr-link" href="/">
                        Home
                      </a>
                    </li>
                    <li>
                      <a className="hvr-link" href="/about">
                        About
                      </a>
                    </li>
                    <li>
                      <a className="hvr-link" href="/services">
                        Services
                      </a>
                    </li>
                    <li>
                      <a className="hvr-link" href="/projects">
                        Projects
                      </a>
                    </li>
                    <li>
                      <a className="hvr-link" href="/blog">
                        Blog
                      </a>
                    </li>
                    <li>
                      <a className="hvr-link" href="/contact">
                        Contact
                      </a>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;