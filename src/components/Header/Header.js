import React from "react";
// import { Link } from "react-router-dom";
import logo from "../../images/Logo.svg";
import "./Header.css";

const Header = () => {
  return (
    <nav className="header">
      <img href="#http://localhost:3000/" src={logo} alt="" />
      <div>
        <a href="shop">Shop</a>
        <a href="/orders">Orders</a>

        {/* <Link to="/orders"></Link> */}

        <a href="/inventory">Inventory</a>
        <a href="/about">About</a>
      </div>
    </nav>
  );
};

export default Header;
