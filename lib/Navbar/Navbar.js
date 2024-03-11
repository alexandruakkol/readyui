import React, { useState } from 'react';
import './R_Navbar.css';
import { GiHamburgerMenu } from "react-icons/gi";
const R_Navbar = props => {
  const {
    items,
    logo_el
  } = props;
  const [isListShown, setIsListShown] = useState(false);
  return /*#__PURE__*/React.createElement("nav", {
    className: "rui-navbar"
  }, /*#__PURE__*/React.createElement(React.Fragment, null, logo_el), /*#__PURE__*/React.createElement("div", {
    className: "rui-hamburger-container"
  }, /*#__PURE__*/React.createElement(GiHamburgerMenu, {
    className: "rui-hamburger",
    onClick: () => {
      setIsListShown(!isListShown);
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: `rui-hamburger-list ${isListShown ? 'open' : ''}`
  }, items.map((item, index) => /*#__PURE__*/React.createElement("div", {
    key: index,
    className: "rui-hamburger-item"
  }, item)))), /*#__PURE__*/React.createElement("div", {
    className: "rui-navbar-items"
  }, items));
};
export default R_Navbar;