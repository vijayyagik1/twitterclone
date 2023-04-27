import React from 'react'
import { NavLink } from 'react-router-dom';
import style from "./Footer.module.css";

export function Footer() {
  return (
    <div className={style.container}>
       <div className={style.title}>
          <h1>Don't miss what happening</h1>
          <p>People on twitter are the first to know</p>
       </div>

       <div className={style.userfield}>
    <NavLink to='/login' className={style.login}>Sign in</NavLink>
    <NavLink to='/register' className={style.register}>Sign up</NavLink>
       </div>
    </div>
  )
}
