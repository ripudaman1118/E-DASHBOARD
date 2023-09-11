import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Nav = () => {
    const data = localStorage.getItem("user");
    const navigate = useNavigate();
    const logout = () => {

        localStorage.clear();
        navigate = "/signup";
    }
    return (
        <div>
            <img className="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVeXmmgy4UHViI1nvK0X5Mddk3b_Kx9hkEug&usqp=CAU"></img>
            {data ?
                <ul className="nav-ul">
                    <li><Link to="">Products</Link></li>
                    <li><Link to="/add">Add Products</Link></li>
                    <li><Link to="/update">Update Products</Link></li>
                    <li><Link to="profile">Profile</Link></li>
                    <li><Link onClick={logout} to="/signup">LogOut </Link></li>
                </ul>
                :
                <ul className="nav-ul rightside">
                    <li><Link to="signup">Sign Up</Link></li>
                    <li><Link to="login">Login</Link></li>
                </ul>
            }
        </div>
    )
}

export default Nav;