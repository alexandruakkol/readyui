import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { GiHamburgerMenu } from "react-icons/gi";
const Navbar = props => {
  let {
    items,
    large_logo,
    small_logo,
    cta_button
  } = props;
  if (!small_logo) small_logo = large_logo;
  const [isListShown, setIsListShown] = useState(false);
  const reactElement = React.Children.only(cta_button);
  const [logo, setLogo] = useState(small_logo);
  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth >= 1000) {
        setLogo(large_logo);
      } else {
        setLogo(small_logo);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return /*#__PURE__*/React.createElement("nav", {
    className: "rui-navbar"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rui-logo"
  }, logo), /*#__PURE__*/React.createElement("div", {
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