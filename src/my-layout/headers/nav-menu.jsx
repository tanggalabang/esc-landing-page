import Link from "next/link";
import React, { useEffect } from "react";
import menu_data from "./menu-data";

const NavMenu = ({ featureRef, aboutRef, faqRef }) => {
  useEffect(() => {
    console.log(featureRef?.current);
    console.log(aboutRef?.current);
  }, [featureRef, aboutRef]);
  //navigation single page
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
      <ul>
        <li>
          <Link style={{ letterSpacing: "1px" }} href={"/"}>
            HOME
          </Link>
        </li>
        <li>
          <button
            style={{
              fontWeight: 450, // Anda dapat menyesuaikan nilai ini untuk mengatur ketebalan teks
              transition: "color 0.3s ease", // Menambahkan efek transisi untuk perubahan warna
              letterSpacing: "1px",
              color: "#000229",
            }}
            onClick={() => gotoFeature(featureRef.current)}
            onMouseEnter={(e) => (e.target.style.color = "blue")} // Mengubah warna saat hover
            onMouseLeave={(e) => (e.target.style.color = "black")} // Mengembalikan warna saat tidak hover
          >
            TOP FEATURE
          </button>
        </li>
        <li>
          <button
            style={{
              fontWeight: 450, // Anda dapat menyesuaikan nilai ini untuk mengatur ketebalan teks
              transition: "color 0.3s ease", // Menambahkan efek transisi untuk perubahan warna
              letterSpacing: "1px",
              color: "#000229",
            }}
            onClick={() => gotoAbout(aboutRef.current)}
            onMouseEnter={(e) => (e.target.style.color = "blue")} // Mengubah warna saat hover
            onMouseLeave={(e) => (e.target.style.color = "black")} // Mengembalikan warna saat tidak hover
          >
            ABOUT
          </button>
        </li>
        <li>
          <button
            style={{
              fontWeight: 450, // Anda dapat menyesuaikan nilai ini untuk mengatur ketebalan teks
              transition: "color 0.3s ease", // Menambahkan efek transisi untuk perubahan warna
              letterSpacing: "1px",
              color: "#000229",
            }}
            onClick={() => gotoFaq(faqRef.current)}
            onMouseEnter={(e) => (e.target.style.color = "blue")} // Mengubah warna saat hover
            onMouseLeave={(e) => (e.target.style.color = "black")} // Mengembalikan warna saat tidak hover
          >
            FAQ
          </button>
        </li>
        {/* {menu_data.map((menu_item, i) => (
          <li key={i}>
            <Link style={{ letterSpacing: "1px" }} href={menu_item.link}>
              {menu_item.title}
            </Link> */}
        {/* {menu_item.has_dropdown && (
              <ul className="submenu">
                {menu_item.sub_menus.map((sub_menu, i) => (
                  <li key={i}>
                    <Link
                      style={{ letterSpacing: "100px" }}
                      href={sub_menu.link}
                    >
                      {sub_menu.title}
                    </Link>
                  </li>
                ))}
              </ul>
            )} */}
        {/* </li>
        ))} */}
      </ul>
    </>
  );
};

export default NavMenu;
