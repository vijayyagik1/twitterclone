import { useRecoilState } from "recoil";
import { Button, TextField } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Link, useNavigate } from "react-router-dom";
import AppleIcon from "@mui/icons-material/Apple";
import { isLogin } from "./Atom";
import { FaTwitter } from "react-icons/fa";
import style from "./Login.module.css";
import { useState } from "react";

function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setpassword] = useState("");
  const [islogin, setlogin] = useRecoilState(isLogin);

  function handleLogin() {
    const Users = JSON.parse(localStorage.getItem("user") || []);

    const user = Users.find((user) => {
      return (
        user.name.toString() === username.toString() ||
        user.email.toString() === username.toString() ||
        user.phone.toString() === username.toString()
      );
    });

    if (user) {
      if (user.password.toString() === password.toString()) {
        alert("success");
        setlogin(!islogin);
        navigate("/home");
      } else {
        alert("Invalid credentials");
      }
    } else {
      alert("User not found");
    }
  }

  return (
    <div className={style.Login}>
      <div className={style.container}>
        <div className={style.box}>
          <TwitterIcon sx={{ color: "skyblue" }} />
          <FaTwitter className={style.logo} />
          <h1 className={style.heading}>Sign in to Twitter</h1>

          <Button
            sx={{
              borderRadius: "100px",
              backgroundColor: "white",
              color: "black",
              marginTop: "10px",
            }}
            variant="contained"
          >
            <GoogleIcon sx={{ color: "black" }} /> Sign in with Gmail
          </Button>
          <br />
          <Button
            sx={{
              borderRadius: "100px",
              backgroundColor: "white",
              color: "black",
              marginTop: "15px",
            }}
            variant="contained"
          >
            <AppleIcon />
            Sign in with Apple
          </Button>
          <br />
          <form>
            <TextField
              type="text"
              id="filled-basic"
              label="Phone, email, or username"
              variant="filled"
              className={`${style.input} ${style.username}`}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
            <TextField
              type="password"
              id="filled-basic"
              label="Password"
              variant="filled"
              className={`${style.input} ${style.password}`}
              onChange={(e) => {
                setpassword(e.target.value);
              }}
            />

            <br />
            <Button
              sx={{
                borderRadius: "100px",
                backgroundColor: "white",
                color: "black",
                marginTop: "15px",
              }}
              variant="contained"
            >
              Forgot Password
            </Button>
            <br />
            <Button
              sx={{
                borderRadius: "100px",
                backgroundColor: "#1DA1F2",
                color: "white",
                marginTop: "15px",
              }}
              variant="contained"
              onClick={handleLogin}
            >
              Login
            </Button>
            <br />
          </form>
          <p>
            Don't have an account? <Link to="/register">Sign Up</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
