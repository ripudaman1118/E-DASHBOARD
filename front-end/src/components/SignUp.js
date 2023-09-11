import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Axios from 'axios';


const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const data = localStorage.getItem("user");
    if (data) {
      navigate("/");
    }
  });

  const collectnData = async () => {
    try {
      console.log({ name, email, password });

      let result = Axios.post('http://localhost:5000/signup', {
        name: name,
        email: email,
        password: password

      });
      // console.log(JSON.stringify(await result));
      localStorage.setItem("user", JSON.stringify(await result));
      if (result) {
        navigate("/");
      }


    } catch (error) {
      console.error("Error:", error);
    }

  }

  return (
    <div className="signuppage">
      <h1>Sign Up</h1>
      <input className="inputbox" type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter Name" />
      <input className="inputbox" type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter Email" />
      <input className="inputbox" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter Password" />
      <button onClick={collectnData} className="buttonbox" type="button">Sign Up</button>
    </div>
  )
}

export default SignUp;