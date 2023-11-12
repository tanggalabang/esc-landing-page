import React from "react";
import SEO from "../common/seo";
import HomeOne from "@/src/my-components/homes/home";
import Wrapper from "../layout/wrapper";

const Home = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"Softec - Data analytics"} />
      <HomeOne />
    </Wrapper>
  );
};

export default Home;
