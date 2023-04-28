import React, { useState } from "react";
import style from "./Login.module.css";
import { TextField } from "@mui/material";
import { TiSocialTwitter } from "react-icons/ti";
import { FcGoogle } from "react-icons/fc";
import { BsApple } from "react-icons/bs";

export const Login = () => {
  const [loginInput, setLoginInput] = useState({
    email: "",
    password: "",
  });

  const handleInput = (e) => {
    const { value, name } = e.target;

    setLoginInput(() => {
      return { ...loginInput, [name]: value };
    });
  };
  const handleFormData = () => {
    e.preventDefault();
    console.log(loginInput);
  };

  return (
    <div className={style.logobox}>
      <TiSocialTwitter className={style.logoT} />
      <h2>Sign In to Twitter</h2>

      <button>
        <FcGoogle className={style.logo} />
        Sign in with Google
      </button>
      <button>
        <BsApple className={style.logo} />
        Sign in with Google
      </button>

      <hr></hr>
      <span>Or</span>

      <form onSubmit={handleFormData}>
        <div className={style.userfield}>
          <TextField
            sx={{
              width: "100%",
            }}
            label="Email"
            variant="outlined"
            type="email"
            name="email"
            className={style.inputfield}
            onChange={handleInput}
          />
        </div>

        <div className={style.userfield}>
          <TextField
            sx={{
              width: "100%",
            }}
            label="Password"
            variant="outlined"
            type="password"
            name="password"
            className={style.inputfield}
            onChange={handleInput}
          />
        </div>
        <button>Log in</button>
      </form>

      <button type="submit">Forget Password</button>
      <p>
        Don't Have an account<a>Sign up</a>
      </p>
    </div>
  );
};
