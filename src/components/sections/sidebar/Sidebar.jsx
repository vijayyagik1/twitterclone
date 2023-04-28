import React from "react";
import style from "./Sidebar.module.css";
import {
  FaTwitter,
  FaHome,
  FaHashtag,
  FaRegBell,
  FaRegEnvelope,
  FaRegBookmark,
  FaClipboardList,
  FaUserAlt,
  FaMehBlank,
} from "react-icons/fa";
import { Link } from "react-router-dom";

export const Sidebar = () => {
  return (
    <div className={style.sectionOne}>
      <div className={style.sidebar}>
        <div className={style.list}>
          <Link to="/">
            <FaTwitter className={style.logo} />
          </Link>
        </div>
        <div className={style.list}>
          <Link to="/">
            <FaHome className={style.icons} />
            home
          </Link>
        </div>
        <div className={style.list}>
          <Link to="/explore">
            <FaHashtag className={style.icons} />
            Explore
          </Link>
        </div>
        <div className={style.list}>
          <Link to="/notifications">
            <FaRegBell className={style.icons} />
            Notification
          </Link>
        </div>
        <div className={style.list}>
          <Link to="/notifications">
            <FaRegEnvelope className={style.icons} />
            Message
          </Link>
        </div>
        <div className={style.list}>
          <Link to="/bookmarks">
            <FaRegBookmark className={style.icons} />
            Bookmarks
          </Link>
        </div>
        <div className={style.list}>
          <Link to="/lists">
            <FaClipboardList className={style.icons} />
            Lists
          </Link>
        </div>
        <div className={style.list}>
          <Link to="/profile">
            <FaUserAlt className={style.icons} />
            Profile
          </Link>
        </div>
        <div className={style.list}>
          <Link to="/">
            <FaMehBlank className={style.icons} />
            More
          </Link>
        </div>

        <div className={style.tweetBtn}>
          <button>Tweet</button>
        </div>
      </div>
    </div>
  );
};

