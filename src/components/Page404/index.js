import React from 'react';
import './styles.scss';

// == Composant
import Header from 'src/components/Header';
import Footer from 'src/components/Footer';
import Form404 from './Form404';

const Page404 = ({ width, breakpoint }) => {
  console.log('toto');
  return (
    <div className="page-404">
      <Header width={width} breakpoint={breakpoint} />
      <Form404 />
      <Footer width={width} breakpoint={breakpoint} />
    </div>
  );
};

export default Page404;
