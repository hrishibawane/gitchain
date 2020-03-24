import React from "react";
import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";

export default props => {
  return (
    <div>
      <Head>
        <link
          rel="stylesheet"
          href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css"
        />
      </Head>
      <Header />
      <div 
        style={{
          position: "relative",
          minHeight: "100vh"
        }}
      >
      {props.children}
      </div>
      <Footer />
    </div>
  );
};
