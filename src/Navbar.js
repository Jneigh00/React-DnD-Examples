import {NavLink} from "react-router-dom";
import React from "react";

function Navbar(){
    return(
        <nav className="nav-wrapper blue darken-1">
            <ul className="center">
                <li><NavLink to="/">Home</NavLink> </li>
                <li><NavLink to="/TowersOfHanio">TowersOfHanio of Hanoi</NavLink> </li>
                <li><NavLink to="/Numbers">Number Puzzle </NavLink> </li>
            </ul>
        </nav>
    )
}
export default Navbar