import React from "react";
import "../../App.css";
// import Footer from "../Footer";

function Contact() {
  return (
    <>
      <div id="contact" className="contact-container">
        <span>
          <a
            className="contact-link"
            href="mailto:mathpowerclay@mailfence.com"
            target="_blank"
            aria-label="Instagram"
          >
            EMAIL: mathpowerclay@mailfence.com
          </a>
        </span>
        <br />
        <br />
        <span>
          <a
            className="contact-link"
            href="https://www.instagram.com/mathpowerclay/"
            target="_blank"
            aria-label="Instagram"
          >
            INSTAGRAM: mathpowerclay&nbsp;
            {/* <img src="https://i.imgur.com/JEodSva.png"></img> */}
          </a>
        </span>
      </div>
      {/* <Footer /> */}
    </>
  );
}

export default Contact;
