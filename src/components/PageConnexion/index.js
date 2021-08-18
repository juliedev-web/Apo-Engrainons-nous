import React from 'react';

// == Composant
import Header from 'src/components/Header';
import Footer from 'src/components/Footer';
import FormConnexion from './FormConnexion';

const PageConnexion = ({ width, breakpoint }) => {
  console.log('toto');
  return (
    <div>
      <Header width={width} breakpoint={breakpoint} />
      <FormConnexion />
      <Footer width={width} breakpoint={breakpoint} />
    </div>
  );
};

export default PageConnexion;
