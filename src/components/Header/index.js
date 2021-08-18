import React from 'react';

import HeaderMobile from 'src/components/Header/HeaderMobile';
import HeaderDesktop from 'src/components/Header/HeaderDesktop';

const Header = ({ width, breakpoint, isLogged }) => (
  width < breakpoint ? <HeaderMobile /> : <HeaderDesktop isLogged={isLogged} />
);

export default Header;
