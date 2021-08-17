import React from 'react';

// == Composant
import Header from 'src/components/Header';
import Footer from 'src/components/Footer';
import FormConnexion from './FormConnexion';

const PageConnexion = () => {
  console.log('toto');
  return (
    <div>
      <Header />
      <FormConnexion />
      <Footer />
    </div>
  );
};

export default PageConnexion;
