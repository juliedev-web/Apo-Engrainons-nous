import React from 'react';

// == Composant
import Header from 'src/components/Header';
import Navbar from 'src/components/Navbar';
import FormConnexion from './FormConnexion';

const PageConnexion = () => {
  console.log('toto');
  return (
    <div>
      <Header />
      <FormConnexion />
      <Navbar />
    </div>
  );
};

export default PageConnexion;
