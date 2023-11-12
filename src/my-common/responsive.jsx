import Link from "next/link";
import Image from "next/image";
import React from "react";

// images import
import about_img_1 from "../../public/assets/img/about/about-bg-shape.png";
import about_img_2 from "../../public/assets/img/about/about-9.png";
import about_img_3 from "../../public/assets/img/about/about-1.jpg";
import about_img_4 from "../../public/assets/img/about/about-3.jpg";
import about_img_5 from "../../public/assets/img/about/about-6.png";

const img = about_img_1;
// about data
const about_data = [
  // {
  //   id: 1,
  //   cls: "bg-shape",
  //   img: about_img_1,
  // },
  {
    id: 2,
    cls: "main-img-2 z-index-3",
    img: about_img_2,
  },
  // {
  //   id: 3,
  //   cls: "sub-img-1 d-none d-sm-block z-index-3",
  //   img: about_img_3,
  // },
  // {
  //   id: 4,
  //   cls: "sub-img-2 d-none d-sm-block",
  //   img: about_img_4,
  // },
  // {
  //   id: 5,
  //   cls: "sub-img-3 d-none d-sm-block z-index-3",
  //   img: about_img_5,
  // },
];

// about content
const about_content = {
  title: "RESPONSIVE DEVICE",
  sub_title: "Responsive all device and user friendly",
  des: (
    <>
      e-SchoolConnect supports responsive displays on various devices, namely
      mobile, tablet and desktop. So users can access this application easily
      and comfortably from any device they own.
    </>
  ),

  about_list: [<>Desktop</>, <>Tablet</>, <>Mobile</>],
  btn_text: "About Us",
};
const { title, sub_title, des, about_list, btn_text } = about_content;

const Responsive = () => {
  return (
    <>
      <div className="tp-about__area tp-about__pt-pb-2 pt-60 pb-160">
        <div className="container">
          <div className="row align-items-center">
            <div
              className="col-xl-6 col-lg-6 wow tpfadeLeft"
              data-wow-duration=".9s"
              data-wow-delay=".6s"
            >
              <div className="tp-about__right">
                <div className="tp-about__section-box">
                  <h4 className="tp-section-subtitle">{title}</h4>
                  <h3 className="tp-section-title mb-15">{sub_title}</h3>
                  <p>{des}</p>
                </div>
                <div className="tp-about__list">
                  <ul style={{ display: "flex" }}>
                    {about_list.map((item, i) => (
                      <li key={i} style={{ marginRight: "25px" }}>
                        <i className="fal fa-check"></i>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
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
            <div
              className="col-xl-6 col-lg-6 wow tpfadeRight"
              data-wow-duration=".9s"
              data-wow-delay=".2s"
            >
              <div className="tp-about__img-wrapper text-center text-lg-end p-relative">
                {about_data.map((item, i) => (
                  <div key={i} className={`tp-about__${item.cls}`}>
                    <Image
                      style={{ height: "580px", width: "500px" }}
                      src={item.img}
                      alt="theme-pure"
                    />
                  </div>
                ))}
                <Image
                  style={{ marginTop: "-500px" }}
                  src={img}
                  alt="theme-pure"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Responsive;
