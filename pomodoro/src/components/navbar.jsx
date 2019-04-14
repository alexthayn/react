import React, { Component } from "react";

//Stateless functional component
const NavBar = ({ totalCounters }) => {
  return (
    <nav className="navbar navbar-light" style={{ backgroundColor: "#ffcccc" }}>
      <a
        className="navbar-brand text-uppercase font-weight-light"
        href="#"
        style={{ fontSize: 40 }}
      >
        Pomodoro
      </a>
    </nav>
  );
};

export default NavBar;
