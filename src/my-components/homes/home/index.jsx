import ScrollToTop from "@/src/hooks/scroll-to-top";
import Footer from "@/src/my-layout/footers/footer";
import Header from "@/src/my-layout/headers/header";
import React, { useEffect, useRef, useState } from "react";
import AboutArea from "../../../my-common/about-area";
import Responsive from "../../../my-common/responsive";
import FeatureArea from "./feature-area";
import HeroSlider from "./hero-slider";
import FaqArea from "@/src/my-components/homes/home-2/faq-area";

const HomeOne = () => {
  const featureRef = useRef(null);
  const aboutRef = useRef(null);
  const faqRef = useRef(null);
  const responsiveRef = useRef(null);

  // useEffect(() => {
  //   console.log(featureRef.current);
  //   console.log(aboutRef.current);
  // }, [featureRef, aboutRef]);
  return (
    <>
      <Header featureRef={featureRef} aboutRef={aboutRef} faqRef={faqRef} />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main className="fix">
            <HeroSlider />
            <div ref={featureRef}>
              <FeatureArea />
            </div>
            <div ref={aboutRef}>
              <AboutArea />
            </div>
            <div ref={faqRef}>
              <FaqArea style_service={true} />
            </div>
            <div ref={responsiveRef}>
              <Responsive />
            </div>
          </main>
          <Footer />
          <ScrollToTop />
        </div>
      </div>
    </>
  );
};

export default HomeOne;
