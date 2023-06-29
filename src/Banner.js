import React, { useEffect, useState } from "react";
import "./Banner.css";
import requests from "./Requests";
import axios from "axios";

function Banner() {
  const [movie, setMovie] = useState([]);
  const API_KEY = "5e02c9eaf07caea1d74394972b176c77";

  async function fetchData() {
    const options = {method: 'GET', headers: {accept: 'application/json'}};
    fetch(`https://api.themoviedb.org/3/trending/movie/?api_key=${API_KEY}&language=en-US`, options)
      .then(response => response.json())
      .then(response => console.log("response",response))
      .catch(err => console.error("err",err));
  }
  fetchData();
  
  useEffect(() => {
    // async function fetchData() {
    //   const request = await axios.get("https://api.themoviedb.org/3/trending/movie/day?language=en-US",API_KEY);
    //   console.log("request",request)
    //   setMovie(
    //     request.data.results[
    //       Math.floor(Math.random() * request.data.results.length - 1)
    //     ]
    //   );
    // }
    // fetchData();
  });
  console.log("movie", movie);
  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  }

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Black_flag.svg/1200px-Black_flag.svg.png")`,
        objectFit: "contain",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">movie</h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">my list</button>
        </div>
        <div className="banner__description">
          {truncate(
            `  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            consequuntur exercitationem facilis quaerat error, reprehenderit aperiam!
            Laborum dolore amet quibusdam quam corrupti reiciendis veniam, nisi
            deserunt, atque quisquam, inventore soluta suscipit unde.
        `,
            150
          )}
        </div>
      </div>
      <div className="banner--fadeBottom" />
    </header>
  );
}

export default Banner;
