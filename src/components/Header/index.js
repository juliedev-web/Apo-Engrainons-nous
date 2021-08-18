import React from 'react';

import PropTypes from 'prop-types';

import HeaderMobile from 'src/components/Header/HeaderMobile';
import HeaderDesktop from 'src/components/Header/HeaderDesktop';

const Header = ({ width, breakpoint, isLogged }) => (
  width < breakpoint ? <HeaderMobile /> : <HeaderDesktop isLogged={isLogged} />
);

Header.propTypes = {
  width: PropTypes.number.isRequired,
  breakpoint: PropTypes.number.isRequired,
};

export default Header;
