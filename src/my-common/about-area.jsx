import Link from "next/link";
import Image from "next/image";
import React from "react";

// images import
import about_img_1 from "../../public/assets/img/about/about-bg-shape.png";
import about_img_2 from "../../public/assets/img/about/about-15.png";
import about_img_3 from "../../public/assets/img/about/about-13.png";
import about_img_4 from "../../public/assets/img/about/about-14.png";
import about_img_5 from "../../public/assets/img/about/about-6.png";

// about data
const about_data = [
  {
    id: 1,
    cls: "bg-shape",
    img: about_img_1,
  },
  {
    id: 2,
    cls: "main-img z-index",
    img: about_img_2,
  },
  {
    id: 3,
    cls: "sub-img-1 d-none d-sm-block z-index-3",
    img: about_img_3,
  },
  {
    id: 4,
    cls: "sub-img-2 d-none d-sm-block",
    img: about_img_4,
  },
  {
    id: 5,
    cls: "sub-img-3 d-none d-sm-block z-index-3",
    img: about_img_5,
  },
];

// about content
const about_content = {
  title: "ABOUT US",
  sub_title: (
    <>
      What is
      <br /> e-SchoolConnect?
    </>
  ),
  des: (
    <>
      e-SchoolConnect is a Learning Management System platform that aims to
      strengthen connectivity in school education. This platform is designed to
      make it easier for teachers and students to manage materials, assignments
      and interactions in the classroom. <br />
      <br />
      With e-SchoolConnect, users can access the platform via a browser on
      various devices with an internet connection, such as desktop computers,
      laptops, tablets and smartphones.
    </>
  ),

  about_list: [
    <>Various analysis options.</>,
    <>Page Load (time, size, number of requests).</>,
    <> Big data analysis.</>,
  ],
  btn_text: "About Us",
};
const { title, sub_title, des, about_list, btn_text } = about_content;

const AboutArea = () => {
  return (
    <>
      <div className="tp-about__area tp-about__pt-pb pt-100 pb-160">
        <div className="container">
          <div className="row align-items-center">
            <div
              className="col-xl-6 col-lg-6 wow tpfadeLeft"
              data-wow-duration=".9s"
              data-wow-delay=".2s"
            >
              <div className="tp-about__img-wrapper text-center text-lg-end p-relative">
                {about_data.map((item, i) => (
                  <div key={i} className={`tp-about__${item.cls}`}>
                    <Image src={item.img} alt="theme-pure" />
                  </div>
                ))}
              </div>
            </div>
            <div
              className="col-xl-6 col-lg-6 wow tpfadeRight"
              data-wow-duration=".9s"
              data-wow-delay=".6s"
              style={{ paddingLeft: "50px" }}
            >
              <div className="tp-about__right">
                <div className="tp-about__section-box">
                  <h4 className="tp-section-subtitle">{title}</h4>
                  <h3 className="tp-section-title mb-15">{sub_title}</h3>
                  <p>{des}</p>
                </div>
                {/* <div className="tp-about__list">
                  <ul>
                    {about_list.map((item, i) => (
                      <li key={i}>
                        <i className="fal fa-check"></i>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div> */}
                {/* <div className="tp-about__btn">
                  <Link
                    className="tp-btn tp-btn-hover alt-color-black"
                    href="/about"
                  >
                    <span>{btn_text}</span>
                    <b></b>
                  </Link>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutArea;
