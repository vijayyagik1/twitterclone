import React, { useState } from "react";
import style from "./Register.module.css";
import { TiSocialTwitter } from "react-icons/ti";
import { FcGoogle } from "react-icons/fc";
import { BsApple } from "react-icons/bs";
import { Button } from "@mui/material";
import {TextField} from "@mui/material"

export function Register() {
  const [hide, setHide] = useState(false);
  const [inputVal, setInputVal] =useState({
    name:"",
    email:"",
    phone:"",
    password:""
  })

  const getData=(e)=>{
    const {value, name} = e.target
      setInputVal(()=>{
        return{
            ...inputVal, [name]:value
        }
      })
  }
   
  const handleformSubmit=(e)=>{
     e.preventDefault()
     console.log(inputVal)
  }

  return (
    <div className={style.logobox}>
      <div
        className={style.createfield}
        style={{ display: hide ? "none" : " " }}
      >
        <TiSocialTwitter className={style.logoT} />
        <h2>Sign In to Twitter</h2>

        <button>
          <FcGoogle className={style.logo} />
          Sign in with Google
        </button>
        <button>
          <BsApple className={style.logo} />
          Sign in with Apple
        </button>

        <hr></hr>
        <span>Or</span>
        <Button
          sx={{
            borderRadius: "4rem",
            backgroundColor: "black",
            color: "white",
            overflow: "none",
          }}
          variant="contained"
          onClick={()=>setHide(true)}

        >
          Create account
        </Button>
      </div>
      <div className={style.textfield} style={{display:hide? "": "none"}}>
         <form onSubmit={handleformSubmit}>
         <div className={style.userfield}>
          <TextField sx={{width:"100%"}}
            label="name"
            name="name"
            variant="outlined"
            onChange={getData}
            className={style.textField}
          />
        </div>

        <div className={style.userfield}>
          <TextField sx={{width:"100%"}}
            label="email"
            name="email"
            variant="outlined"
            onChange={getData}
            className={style.textField}
          />
        </div>
        <div className={style.userfield}>
          <TextField sx={{width:"100%"}}
            label="phone"
            name="phone"
            variant="outlined"
            onChange={getData}
            className={style.textField}
          />
        </div>
        <div className={style.userfield}>
          <TextField sx={{width:"100%"}}
            label="password"
            name="password"
            variant="outlined"
            onChange={getData}
            className={style.textField}
          />
        </div>

        <Button
          sx={{
            borderRadius: "4rem",
            backgroundColor: "black",
            color: "white",
            overflow: "none",
          }}
          variant="contained"
          type="submit"
        >
        Submit
        </Button>
         </form>
      </div>
    </div>
  );
}
