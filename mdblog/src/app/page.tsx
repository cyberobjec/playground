import React from "react";
import Login from "./components/Login";

const page = () => {
  return (
    <main id="hero">
      <div className="hero-img">
        <img src="/hero-img.jpeg" alt="hero-img" />
      </div>
      <div className="hero-login">
        <Login />
      </div>
    </main>
  );
};

export default page;
