// import react, { useEffect, useState } from 'react';
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './Home.css'
// import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import {
  faHome,
  faBell,
  faEnvelope,
  faBookmark,
  faListAlt,
  faUser,
  faEllipsisH,
} from "@fortawesome/free-solid-svg-icons";

function Home() {
  const [data, setData] = useState(false);
  useEffect(() => {
    let res = JSON.parse(localStorage.getItem("isLogin"));
    setData(res);
  }, []);

  return (
    <div>
      Home
      {data && <li>done</li>}
      <button>
        <Link to="/login">Login</Link>
      </button>
    </div>
  );
}
<div className="twitter-sidebar">
  <FontAwesomeIcon icon={faTwitter} className="twitter-icon" />
  <div className="twitter-menu">
    <ul>
      <li>
        <FontAwesomeIcon icon={faHome} />
        <span>Home</span>
      </li>
      <li>
        <FontAwesomeIcon icon={faBell} />
        <span>Notifications</span>
      </li>
      <li>
        <FontAwesomeIcon icon={faEnvelope} />
        <span>Messages</span>
      </li>
      <li>
        <FontAwesomeIcon icon={faBookmark} />
        <span>Bookmarks</span>
      </li>
      <li>
        <FontAwesomeIcon icon={faListAlt} />
        <span>Lists</span>
      </li>
      <li>
        <FontAwesomeIcon icon={faUser} />
        <span>Profile</span>
      </li>
      <li>
        <FontAwesomeIcon icon={faEllipsisH} />
        <span>More</span>
      </li>
    </ul>
  </div>
</div>;
// );
// };

export default Home;
