// == Import npm
import React, { useEffect } from 'react';

// == Composant

import HomePage from 'src/components/HomePage';
import FormConnexion from 'src/components/PageConnexion/FormConnexion';
import SignIn from 'src/components/SignIn';

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
      <Homepage width={width} breakpoint={breakpoint} list={list} />
    </div>
  );
};

// == Export
export default App;
