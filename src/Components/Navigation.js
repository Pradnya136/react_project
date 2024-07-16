import React from "react";
import "../App.css";
import logo from "../assets/logo.png";
import { FaSearch, FaPercentage, FaLifeRing,FaChevronDown, FaArrowCircleRight, FaCartPlus, FaProjectDiagram } from "react-icons/fa";



const Navigation = ()=>{
    return(
        <div className="navbar">
           <img className="logo" src={logo} />
           <label className="search_box">Other <input className="searchInput" placeholder="Pune, Maharashtra, India"></input> <FaChevronDown className="icon-searchInput"/> </label>
           <ul className="nav_list">

            <li>Swiggy Co-operate <FaProjectDiagram className="icon"/></li>
            <li>Search <FaSearch className="icon"/></li>
            <li>Offers <FaPercentage className="icon"/></li>
            <li>Help <FaLifeRing className="icon"/></li>
            <li>Sign In <FaArrowCircleRight className="icon"/></li>
            <li>Cart <FaCartPlus className="icon"/></li>
           </ul>
        </div>
    )
}

export default Navigation;