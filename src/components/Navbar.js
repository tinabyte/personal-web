// https://www.youtube.com/watch?v=QwarZBtFoFA good vid for routing
import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
  return (
    <div>
      <div className="navbar">
        <div className="center">
          <Link to="/"> home// </Link>
          <Link to="/projects"> projects// </Link>
          <Link to="/experience"> experience// </Link>
          <Link to="/forfun"> for fun// </Link>
          <Link to="/contact"> contact// </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
