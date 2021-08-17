// == Import npm
import React, { useState, useEffect } from 'react';

// == Composant
import Header from 'src/components/Header';
import Filters from 'src/components/Filters';
import NavBarMobile from 'src/components/NavBarMobile';
import List from 'src/components/List';
import FooterDesktop from 'src/components/FooterDesktop';


// == Import
import './styles.scss';

// == Composant
const App = () => {
  const [width, setWidth] = React.useState(window.innerWidth);
  const breakpoint = 1025;

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleWindowResize);

    // Return a function from the effect that removes the event listener
    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);

  return (
    <div className="app">
      <div className="header-resize">
        <Header />
        {/* <HeaderMobile /> */}
        {/* <HeaderDesktop /> */}
      </div>
      <Filters />
      <List list={list} />
      {width < breakpoint ? <NavBarMobile /> : <FooterDesktop />}
    </div>
  );
};

// == Export
export default App;
