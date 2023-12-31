import Link from "next/link";
import React from "react";
import Image from "next/image";
import MobileMenus from "../my-layout/headers/mobile-menus";

// images import
import logo from "../../public/assets/img/logo/logo.png";
import canvus_img_1 from "../../public/assets/img/about/about-12.png";
import canvus_img_2 from "../../public/assets/img/hero/hero-esc.png";
import canvus_img_3 from "../../public/assets/img/about/about-14.png";
import canvus_img_4 from "../../public/assets/img/about/about-15.png";

const Offcanvus = ({
  featureRef,
  aboutRef,
  faqRef,
  sidebarOpen,
  setSidebarOpen,
}) => {
  return (
    <>
      <div className="tpoffcanvas-area">
        <div className={`tpoffcanvas ${sidebarOpen && "opened"}`}>
          <div className="tpoffcanvas__close-btn">
            <button className="close-btn" onClick={() => setSidebarOpen(false)}>
              <i className="fal fa-times"></i>
            </button>
          </div>
          <div className="tpoffcanvas__logo text-center">
            <Link
              href="/"
              style={{ display: "flex" }}
              onClick={() => setSidebarOpen(false)}
            >
              <Image
                src={logo}
                alt="theme-pure"
                style={{ height: "45px", width: "45px" }}
              />
              <h6
                style={{
                  marginTop: "13px",
                  marginLeft: "2px",
                  color: "white",
                }}
              >
                e-SchoolConnect
              </h6>
            </Link>
          </div>
          <div className="mobile-menu mean-container">
            <MobileMenus
              faqRef={faqRef}
              featureRef={featureRef}
              aboutRef={aboutRef}
            />
          </div>
          <div className="tpoffcanvas__instagram text-center">
            <div className="tpoffcanvas__instagram-title">
              <h4>Dashboard</h4>
            </div>
            <Link href="#">
              <Image src={canvus_img_1} alt="theme-pure" />
            </Link>
            <Link href="#">
              <Image src={canvus_img_2} alt="theme-pure" />
            </Link>
            <Link href="#">
              <Image src={canvus_img_3} alt="theme-pure" />
            </Link>
            <Link href="#">
              <Image src={canvus_img_4} alt="theme-pure" />
            </Link>
          </div>
          <div className="tpoffcanvas__info text-center">
            {/* <h4 className="offcanva-title">we are here</h4> */}
            {/* <Link
              href="https://www.google.com/maps/@23.506657,90.3443647,7z"
              target="_blank"
            > */}
            Full Copyright
            <br /> <Link href="#">@e-SchoolConnect</Link>
            <br /> – {new Date().getFullYear()} –{/* </Link> */}
          </div>
          {/* <div className="tpoffcanvas__social">
            <div className="social-icon text-center">
              <Link href="#">
                <i className="fab fa-twitter"></i>
              </Link>
              <Link href="#">
                <i className="fab fa-instagram"></i>
              </Link>
              <Link href="#">
                <i className="fab fa-facebook-square"></i>
              </Link>
              <Link href="#">
                <i className="fab fa-dribbble"></i>
              </Link>
            </div>
          </div> */}
        </div>
      </div>
      <div
        className={`body-overlay ${sidebarOpen && "apply"}`}
        onClick={() => setSidebarOpen(false)}
      ></div>
    </>
  );
};

export default Offcanvus;
