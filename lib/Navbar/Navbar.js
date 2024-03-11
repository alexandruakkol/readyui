import React from 'react';
const Navbar = props => {
  const {
    items,
    logo_el
  } = props;
  return /*#__PURE__*/React.createElement("nav", {
    style: styles.nav
  }, /*#__PURE__*/React.createElement(React.Fragment, null, logo_el), /*#__PURE__*/React.createElement("div", {
    style: styles.div
  }, items));
};
const styles = {
  nav: {
    userSelect: 'none',
    paddingLeft: '2vw',
    display: 'flex',
    height: '7vh',
    boxShadow: '0 1px 1px var(--BORDERS)',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '90%'
  },
  div: {
    gap: '33px',
    display: 'flex',
    width: '100%',
    justifyContent: 'center'
  }
};
export {Navbar};