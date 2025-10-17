import React from "react";
import { Link } from "react-router";

export const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/">
        <p className="text-2xl font-bold text-gradient">简历分析器</p>
      </Link>

      <Link to="/upload">
        <p className="primary-button">上传简历</p>
      </Link>
    </nav>
  );
};
