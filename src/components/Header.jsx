import React from "react";
import "./style/Header.css";
function Header() {
  return (
    <div>
      <header className="bg-dark py-5">
        <div className="container px-4 px-lg-5 my-5">
          <div className="text-center text-white">
            <h5 className="text-white-50">Welcome to</h5>
            <h1 className=" fw-bolder" id="header">
              SHO-P|Z-ONE
            </h1>
            <p className="lead fw-normal text-white-50 mb-0">
              ............ Here you can buy everything ............
            </p>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
