import Image from "next/image";
import { gsap } from "gsap";
import Link from "next/link";
import Offcanvus from "@/src/my-common/offcanvus";
import SearchPopup from "@/src/modals/search-popup";
import SearchIconTwo from "@/src/svg/search-icon-2";
import UserIcon from "@/src/svg/user-icon";
import React, { useState, useRef, useEffect, useLayoutEffect } from "react";
import NavMenu from "./nav-menu";
import useSticky from "@/src/hooks/use-sticky";
import Slider from "react-slick";

import logo from "../../../public/assets/img/logo/logo.png";

const Header = ({ featureRef, aboutRef, faqRef }) => {
  // useEffect(() => {
  //   console.log(featureRef?.current);
  //   console.log(aboutRef?.current);
  // }, [featureRef, aboutRef]);

  const { sticky } = useSticky();
  const [searchOpen, setSearchOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // gsa use
  let g_timline = new gsap.timeline();
  let header_top_animation = useRef(null);

  useEffect(() => {
    gsap.from(header_top_animation, {
      opacity: 0,
      y: "20px",
      delay: 1.05,
    });
    gsap.to(header_top_animation, {
      opacity: 1,
      y: "0px",
      delay: 1.05,
    });
  }, []);

  // footer slider data
  const footer_slider_data = [
    "Easy and flexible access",
    "Complete features",
    "Web-based solution",
    "Learning efficiency",
    "Facilitate teachers and students",
    "Real-time interaction",
    "Easy management",
    "Multi-device access",
    "Learning quality",
    "Intuitive usage",
    // "Free trial",
    // "Lightning-fast onboarding.",
    // "All-in-one CRM",
    // "Cards for your whole team.",
    // "Free trial",
    // "Free migrations",
    // "Incredible support",
    // "Lightning-fast onboarding.",
    // "Cards for your whole team.",
    // "Free trial",
    // "Free migrations",
  ];
  // slider setting
  const setting = {
    speed: 7000,
    autoplay: true,
    autoplaySpeed: 0,
    centerMode: true,
    cssEase: "linear",
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    infinite: true,
    initialSlide: 1,
    arrows: false,
    buttons: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {},
      },
      {
        breakpoint: 992,
        settings: {},
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
      <header className="header-bottom__transparent z-index-6 tp-header-height">
        <div
          className="header-top__area header-top__space z-index-3 d-none d-md-block tp-header-top-animation"
          ref={(el) => (header_top_animation = el)}
        >
          <div className="container">
            <div className="row align-items-start">
              {/* <div className="col-6">
                <div className="header-top__link">
                  <span>
                    Offer <i>is going on till Friday, $2.99/mo. </i>
                  </span>
                  <Link href="#">
                    <svg
                      width="7"
                      height="10"
                      viewBox="0 0 7 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.40918 9L5.591 5L1.40918 1"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
              <div className="col-6">
                <div className="header-top__support text-end">
                  <span>
                    Get Support:{" "}
                    <Link href="tel:806(000)88899">+806 (000) 888 99</Link>
                  </span>
                </div>
              </div> */}
              <div className="tp-footer-slide">
                {/* <div className="container-fluid g-0">
                  <div className="row g-0 justify-content-center"> */}
                <Slider {...setting} className="footer-slide-active">
                  {footer_slider_data.map((item, i) => (
                    <div key={i} className="footer-slide-wrapper-2">
                      <div className="footer-slide-item-2">
                        <i className="fal fa-check"></i>
                        <span>{item}</span>
                      </div>
                    </div>
                  ))}
                </Slider>
                {/* </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>

        <div
          id="header-sticky"
          className={`header-bottom__area header-mob-space header-bottom__area-2 header-bottom__transparent z-index-5 ${
            sticky && "header-sticky"
          }`}
        >
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-4 col-6">
                <div className="header-bottom__logo">
                  <Link href="/" style={{ display: "flex" }}>
                    <Image src={logo} alt="" height={50} />
                    <h3 style={{ marginTop: "10px", marginLeft: "2px" }}>
                      ESC
                    </h3>
                  </Link>
                </div>
              </div>
              <div className="col-xxl-6 col-xl-5 col-lg-5 d-none d-lg-block">
                <div className="header-bottom__main-menu">
                  <nav id="mobile-menu">
                    {/* <NavMenu /> */}
                    <NavMenu
                      faqRef={faqRef}
                      featureRef={featureRef}
                      aboutRef={aboutRef}
                    />
                  </nav>
                </div>
              </div>
              <div className="col-xxl-4 col-xl-5 col-lg-5 col-md-8 col-6">
                <div className="header-bottom__right d-flex align-items-center justify-content-end">
                  {/* <div className="header-bottom__action">
                    <a
                      className="d-none d-md-inline-block search-open-btn"
                      onClick={() => setSearchOpen(true)}
                    >
                      <SearchIconTwo />
                    </a>
                    <Link
                      className="d-none d-lg-inline-block last-child"
                      href="/register"
                    >
                      <UserIcon />
                      <span>Log In</span>
                    </Link>
                  </div> */}
                  <div className="header-bottom__btn d-flex align-items-center">
                    <Link
                      className="tp-btn-white tp-btn-hover alt-color-black d-none d-md-inline-block"
                      href="http://localhost:3000/auth/login"
                    >
                      <span className="white-text">Dashboard</span>
                      <b></b>
                    </Link>
                    <a
                      className="header-bottom__bar d-lg-none tp-menu-bar"
                      onClick={() => setSidebarOpen(true)}
                    >
                      <i className="fal fa-bars"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <SearchPopup searchOpen={searchOpen} setSearchOpen={setSearchOpen} />
      <Offcanvus
        faqRef={faqRef}
        featureRef={featureRef}
        aboutRef={aboutRef}
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />
    </>
  );
};

export default Header;
