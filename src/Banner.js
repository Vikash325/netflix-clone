import React from "react";
import "./Banner.css";

export default function Banner() {
  return (
    <header
      className="Banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Black_flag.svg/1200px-Black_flag.svg.png")`,
        objectFit: "content",
        backgroundPositon: "center center",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__ttitle">Movie</h1>
        <div className="banner_buttons">
          <button className="banner__btn">play</button>
          <button className="banner__btn">my list</button>
        </div>
        <div className="banner__description">this is the banner description</div>
        <div className="banner__fadeBottom"/>
      </div>
    </header>
  );
}
