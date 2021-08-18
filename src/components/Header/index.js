import React from 'react';

import HeaderMobile from 'src/components/Header/HeaderMobile';
import HeaderDesktop from 'src/components/Header/HeaderDesktop';

const Header = ({ width, breakpoint }) => (width < breakpoint ? <HeaderMobile /> : <HeaderDesktop />);

export default Header;
