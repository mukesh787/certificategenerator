import * as React from "react";
import Header from "../components/Header";
import Body from "../components/Body";
import Footer from "../components/Footer";

// styles
const pageStyles = {
  color: "#232129",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
  minHeight: "90vh",
  paddingLeft: "15%",
  paddingRight: "15%",
};

// markup
const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <Header />
      <Body />
      <Footer />
    </main>
  );
};

export default IndexPage;
