import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Axios from 'axios';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    useEffect(() => {
        const data = localStorage.getItem("user");
        if (data) {
            navigate("/");
        }
    });

    const logininfo = async () => {
        console.log(email, password);

        let result = Axios.post("http://localhost:4000/login", {
            email: email,
            password: password
        }, {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((response) => {
            //console.log(response.data.name);
            if (response.data.name) {
                localStorage.setItem("user", JSON.stringify(result));
                navigate("/");
            }
            else {
                console.log("please cheak email and password ");
            }
        }).catch((error) => {
            console.log(error);
        })
    }
    return (
        <div className="login">
            <h1>Login Page</h1>
            <input className="inputbox" type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter Email" />
            <input className="inputbox" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter Password" />
            <button onClick={logininfo} className="buttonbox" type="button">Login</button>
        </div>
    )
}

export default Login;