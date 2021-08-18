/* eslint-disable max-len */
import React from 'react';

import PropTypes from 'prop-types';

import NavBarMobile from 'src/components/Footer/NavBarMobile';
import FooterDesktop from 'src/components/Footer/FooterDesktop';

const Footer = ({
  width,
  breakpoint,
  isLogged,
}) => (width < breakpoint ? <NavBarMobile isLogged={isLogged} /> : <FooterDesktop />);

Footer.propTypes = {
  isLogged: PropTypes.bool.isRequired,
  width: PropTypes.number.isRequired,
  breakpoint: PropTypes.number.isRequired,
};

export default Footer;
