// == Import npm
import React, { useEffect } from 'react';

// == Composant
import HeaderMobile from 'src/components/Header/HeaderMobile';
import HeaderDesktop from 'src/components/Header/HeaderDesktop';
import Filters from 'src/components/Filters';
import NavBarMobile from 'src/components/NavBarMobile';
import List from 'src/components/List';
import FooterDesktop from 'src/components/FooterDesktop';
import FormConnexion from 'src/components/PageConnexion/FormConnexion';

// == Import
import './styles.scss';
import list from 'src/data/list';

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
      {width < breakpoint ? <HeaderMobile /> : <HeaderDesktop />}
      <FormConnexion />
      {width < breakpoint ? <NavBarMobile /> : <FooterDesktop />}
    </div>
  );
};

// == Export
export default App;
