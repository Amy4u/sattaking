import React from "react";
import Navbar from "../components/partial/Navbar";
import Footer from "../components/partial/Footer";

function PageNotFound() {
  return (
    <>
      <Navbar />
      <section>
        <div className="row yellow_bg web_tag">
          <h2>SATTA</h2>
        </div>
        <div>
            Page Note Found
        </div>
      </section>
      <Footer />
    </>
  );
}

export default PageNotFound;
