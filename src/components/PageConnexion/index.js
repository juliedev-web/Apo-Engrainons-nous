import React from 'react';

// == Composant
import Header from 'src/components/Header';
import NavBarMobile from 'src/components/NavBarMobile';
import FormConnexion from './FormConnexion';

const PageConnexion = () => {
  console.log('toto');
  return (
    <div>
      <Header />
      <FormConnexion />
      <NavBarMobile />
    </div>
  );
};

export default PageConnexion;
