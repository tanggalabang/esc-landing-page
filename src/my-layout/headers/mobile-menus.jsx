import Link from "next/link";
import React, { useState } from "react";
// internal
import menu_data from "./menu-data";

const MobileMenus = ({ featureRef, aboutRef, faqRef }) => {
  const [navTitle, setNavTitle] = useState("");
  //openMobileMenu
  const openMobileMenu = (menu) => {
    if (navTitle === menu) {
      setNavTitle("");
    } else {
      setNavTitle(menu);
    }
  }; //navigation single page
  const gotoFeature = (ref) => {
    window.scrollTo({
      top: ref.offsetTop + 10,
      left: 0,
      behavior: "smooth",
    });
  };
  const gotoAbout = (ref) => {
    window.scrollTo({
      top: ref.offsetTop - 270,
      left: 0,
      behavior: "smooth",
    });
  };
  const gotoFaq = (ref) => {
    window.scrollTo({
      top: ref.offsetTop - 150,
      left: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <nav className="mean-nav">
        <ul>
          {menu_data.map((menu, i) => (
            <React.Fragment key={i}>
              {/* {menu.has_dropdown && (
                <li className="has-dropdown">
                  <Link href={menu.link}>{menu.title}</Link>
                  <ul
                    className="submenu"
                    style={{
                      display: navTitle === menu.title ? "block" : "none",
                    }}
                  >
                    {menu.sub_menus.map((sub, i) => (
                      <li key={i}>
                        <Link href={sub.link}>{sub.title}</Link>
                      </li>
                    ))}
                  </ul>
                  <a
                    className={`mean-expand ${
                      navTitle === menu.title ? "mean-clicked" : ""
                    }`}
                   
                    onClick={() => openMobileMenu(menu.title)}
                    style={{ fontSize: "18px", cursor: "pointer" }}
                  >
                    <i className="fal fa-plus"></i>
                  </a>
                </li>
              )} */}
              <li>
                <Link style={{ letterSpacing: "1px" }} href={"/"}>
                  HOME
                </Link>
              </li>
              <li>
                <button
                  style={{
                    fontWeight: 600, // Anda dapat menyesuaikan nilai ini untuk mengatur ketebalan teks
                    transition: "color 0.3s ease", // Menambahkan efek transisi untuk perubahan warna
                    letterSpacing: "1px",
                    color: "white",
                    marginBottom: "15px",
                  }}
                  onClick={() => gotoFeature(featureRef.current)}
                  onMouseEnter={(e) => (e.target.style.color = "pink")} // Mengubah warna saat hover
                  onMouseLeave={(e) => (e.target.style.color = "white")} // Mengembalikan warna saat tidak hover
                >
                  TOP FEATURE
                </button>
              </li>
              <li>
                <button
                  style={{
                    fontWeight: 600, // Anda dapat menyesuaikan nilai ini untuk mengatur ketebalan teks
                    transition: "color 0.3s ease", // Menambahkan efek transisi untuk perubahan warna
                    letterSpacing: "1px",
                    color: "white",
                    marginBottom: "15px",
                  }}
                  onClick={() => gotoAbout(aboutRef.current)}
                  onMouseEnter={(e) => (e.target.style.color = "pink")} // Mengubah warna saat hover
                  onMouseLeave={(e) => (e.target.style.color = "white")} // Mengembalikan warna saat tidak hover
                >
                  ABOUT
                </button>
              </li>
              <li>
                <button
                  style={{
                    fontWeight: 600, // Anda dapat menyesuaikan nilai ini untuk mengatur ketebalan teks
                    transition: "color 0.3s ease", // Menambahkan efek transisi untuk perubahan warna
                    letterSpacing: "1px",
                    color: "white",
                    marginBottom: "15px",
                  }}
                  onClick={() => gotoFaq(faqRef.current)}
                  onMouseEnter={(e) => (e.target.style.color = "pink")} // Mengubah warna saat hover
                  onMouseLeave={(e) => (e.target.style.color = "white")} // Mengembalikan warna saat tidak hover
                >
                  FAQ
                </button>
              </li>
              {/* {!menu.has_dropdown && (
                <li>
                  <Link href={menu.link}>{menu.title}</Link>
                </li>
              )} */}
            </React.Fragment>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default MobileMenus;
