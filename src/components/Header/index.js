import React from 'react';

import PropTypes from 'prop-types';

import HeaderMobile from 'src/components/Header/HeaderMobile';
import HeaderDesktop from 'src/containers/HeaderDesktop';

const Header = ({ width, breakpoint }) => (
  width < breakpoint ? <HeaderMobile /> : <HeaderDesktop />
);

Header.propTypes = {
  width: PropTypes.number.isRequired,
  breakpoint: PropTypes.number.isRequired,
};

export default Header;
