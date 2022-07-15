import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./HeroSection.css";

function HeroSection() {
  return (
    <div id="hero" className="hero-container">
      {/* <video src="/videos/video-1.mp4" autoPlay loop muted /> */}
      <h1>
        POWER CLAY&nbsp;<img src="https://i.imgur.com/4Hoofgg.png"></img>
      </h1>

      <p style={{ textAlign: "center" }}>
        𝙼𝚊𝚗 𝚠𝚊𝚜 𝚖𝚊𝚍𝚎 𝚘𝚏 𝚌𝚕𝚊𝚢 & 𝚝𝚑𝚎 𝚊𝚗𝚜𝚠𝚎𝚛 𝚝𝚘 𝚢𝚘𝚞𝚝𝚑 𝚊𝚗𝚍 𝚑𝚎𝚊𝚕𝚒𝚗𝚐 𝚒𝚜 𝚊𝚛𝚝 + 𝚌𝚕𝚊𝚢{" "}
        <br />
        𝑾𝒊𝒕𝒉 𝑳𝒐𝒗𝒆, 𝒇𝒓𝒐𝒎 <br />
        <div>
          <a
            className="ig-link"
            href="https://www.instagram.com/maththeartist/"
            target="_blank"
            aria-label="Instagram"
          >
            @maththeartist
          </a>{" "}
          &{" "}
          <a
            className="ig-link"
            href="https://www.instagram.com/shepowerland/"
            target="_blank"
            aria-label="Instagram"
          >
            @shepowerland
          </a>
          <br />
          <a
            className="ig-link"
            href="https://www.instagram.com/mathpowerclay/"
            target="_blank"
            aria-label="Instagram"
          >
            @mathpowerclay
          </a>
        </div>
      </p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
          onClick={"contact"}
        >
          CONTACT
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
          onClick={"cards"}
        >
          POWER CLAY&nbsp;
          <img src="https://i.imgur.com/mBbBQCc.png"></img>
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
