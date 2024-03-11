import React, { useState } from 'react';
import './Navbar.css';
import { GiHamburgerMenu } from "react-icons/gi";
const Navbar = props => {
  const {
    items,
    logo_el,
    cta_button
  } = props;
  const [isListShown, setIsListShown] = useState(false);
  const reactElement = React.Children.only(cta_button);
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
  }, item)), /*#__PURE__*/React.createElement("div", {
    key: 'last',
    className: `rui-hamburger-item rui-cta-item`
  }, reactElement))), /*#__PURE__*/React.createElement("div", {
    className: "rui-navbar-items"
  }, items), /*#__PURE__*/React.createElement("div", {
    className: "rui-cta"
  }, cta_button));
};
export default Navbar;