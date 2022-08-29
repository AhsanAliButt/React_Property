import React, { useState } from "react";
import "./header.css";
import { nav } from "../../data/Data";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

const Header = () => {
  const history = useHistory();

  const [navList, setNavList] = useState(false);
  const token = localStorage.getItem("usersdatatoken");
  const signOutHandler = () => {
    window.localStorage.clear(); //clear all localstorage
    history.push("/Home");
    window.location.reload();
  };

  return (
    <>
      <header>
        <div className="container flex">
          <div className="logo">
            <img src="./images/logo.png" alt="" />
          </div>
          <div className="nav">
            <ul className={navList ? "small" : "flex"}>
              {nav.map((list, index) => (
                <li key={index}>
                  <Link to={list.path}>{list.text}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="button flex">
            <h4>
              <span>2</span> My List
            </h4>
            {token ? (
              <button onClick={() => signOutHandler()}>
                <i className="fa fa-sign-out"></i> SignOut
              </button>
            ) : (
              <button onClick={() => {}}>
                <Link to={"/SignIn"}>
                  <i className="fa fa-sign-out"></i> Sign In
                </Link>
              </button>
            )}
          </div>

          <div className="toggle">
            <button onClick={() => setNavList(!navList)}>
              {navList ? (
                <i className="fa fa-times"></i>
              ) : (
                <i className="fa fa-bars"></i>
              )}
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
