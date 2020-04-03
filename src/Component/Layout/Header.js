import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header style={headerStyle}>
      <h1>Todo List</h1>
      <Link to="/" style={headerStyle}>
        Home
      </Link>{" "}
      ||{" "}
      <Link to="/about" style={headerStyle}>
        About
      </Link>
    </header>
  );
};

const headerStyle = {
  background: "#333",
  color: "#fff",
  textAlign: "center",
  paddign: "10px",
};

export default Header;
