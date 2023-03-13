import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import { RxCross2 } from "react-icons/rx";
import { useSelector } from "react-redux";
import { GiHamburgerMenu } from "react-icons/gi";
import "../Admin/index.scss";

function Sidebar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const userMenuItems = useSelector(state => state.userMenuItems)

  const _class = toggleMenu
    ? "admin-sidebar admin-mobile-sidebar"
    : "admin-sidebar";

  return (
    <div>
      <div className={_class}>
        <div className="navbar logo admin-navbar">
          HMS
          <img src={logo} alt="logo-bg" />
          {toggleMenu && (
            <RxCross2
              className="cross-icon"
              onClick={(_) => setToggleMenu(false)}
            />
          )}
        </div>
        <ul>
          <li>
            <Link to="/user">Dashboard</Link>
          </li>
          {userMenuItems && userMenuItems.length > 0
            ? userMenuItems.map(({ name, url }, index) => {
                return (
                  <li key={index}>
                    <Link to={url}>{name}</Link>
                  </li>
                );
              })
            : null}
        </ul>
      </div>

      <div className="mobile-sidebar" onClick={(_) => setToggleMenu(true)}>
        <GiHamburgerMenu />
      </div>
    </div>
  );
}

export default Sidebar;
