import React from "react";
import { Link } from "react-router-dom";
import { Text } from "./Language/Language";

// Modes components
import Darkmode from "./Darkmode/Darkmode";
import Selector from "../components/Language/Selector";

// Search
import Search from "../components/Search/Search";

const Navbar = () => {
  return (
    <div className="navbar">
      <ul className="navbar-list">
        <li>logo</li>
        <li className="link">
          <Link to="/about">
            <Text t="about" />
          </Link>
        </li>
        <li className="link">
          <Link to="/category">
            <Text t="category" />
          </Link>
        </li>
        <li className="link">
          <Link to="/contacts">
            <Text t="contacts" />
          </Link>
        </li>
        <li className="link">
          <Selector />
        </li>
        <li className="link">
          <Darkmode />
        </li>
        <li className="link">
          <Search />
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
