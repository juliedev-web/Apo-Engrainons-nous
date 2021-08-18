/* eslint-disable max-len */
import React from 'react';

import NavBarMobile from 'src/components/Footer/NavBarMobile';
import FooterDesktop from 'src/components/Footer/FooterDesktop';

const Footer = ({ width, breakpoint }) => (width < breakpoint ? <NavBarMobile /> : <FooterDesktop />);

export default Footer;
