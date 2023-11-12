import AnswerQuestion from "@/src/my-common/answer-question";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import img from "../../../../public/assets/img/faq/faq-3.png";
import card_img_2 from "../../../../public/assets/img/card/card-shape-1.png";

const faq_content = {
  sub_title: "Support",
  title: (
    <>
      Frequently <br />
      Asked Questions
    </>
  ),
  description: (
    <>
      Sed ut perspiciatis unde omnis iste natus error <br /> sit voluptatem
      accusantium.!
    </>
  ),
  btn_text: "Get in Touch",
};
const { sub_title, title, description, btn_text } = faq_content;

const FaqArea = ({ style_service }) => {
  return (
    <>
      <div className="tp-faq-area pt-80 pb-120 fix">
        <div className="container">
          <div className="row">
            <div
              className={`col-xl-6 col-lg-6 ${
                style_service && "wow tpfadeLeft"
              }`}
              data-wow-duration={style_service && ".9s"}
              data-wow-delay={style_service && ".4s"}
            >
              <div className="tp-faq-left-wrapper p-relative">
                <div
                  className={`tp-faq-section-box ${
                    style_service && "tp-inner-font tp-inner-faq-box"
                  } pb-20`}
                >
                  <h4
                    className={`${
                      style_service
                        ? "inner-section-subtitle"
                        : "tp-section-subtitle-2"
                    }`}
                  >
                    {sub_title}
                  </h4>
                  <h3
                    className={`${
                      style_service ? "tp-section-title" : "tp-section-title-lg"
                    }`}
                  >
                    {title}
                  </h3>
                  {/* <p>{description}</p> */}
                </div>
                <div className="tp-faq-btn">
                  {/* <Link
                    className={`${
                      style_service
                        ? "tp-btn-inner tp-btn-hover alt-color-black"
                        : "tp-btn-green"
                    } `}
                    href="/contact"
                  >
                    {btn_text}
                  </Link> */}
                </div>
                <div
                  className="tp-faq-img d-sm-none d-md-block"
                  data-parallax='{"x": -50, "smoothness": 30}'
                  style={{ marginBottom: "-290px", marginLeft: "-100px" }}
                >
                  <Image
                    src={img}
                    alt=""
                    style={{ height: "350px", width: "320px" }}
                  />
                </div>
                <div
                  data-parallax='{"x": -50, "smoothness": 30}'
                  style={{ marginTop: "0px", marginLeft: "230px" }}
                  className={`tp-card-img-1 d-sm-none`}
                >
                  <Image src={card_img_2} alt="theme-pure" />
                </div>
                <div
                  data-parallax='{"x": -50, "smoothness": 30}'
                  style={{ marginTop: "240px", marginLeft: "-30px" }}
                  className={`tp-card-img-1 d-none d-sm-none d-md-block`}
                >
                  <Image src={card_img_2} alt="theme-pure" />
                </div>
              </div>
            </div>

            <div className="col-xl-6 col-lg-6">
              <AnswerQuestion />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FaqArea;
