import React from 'react';
import './styles.scss';

// == Composant
import Header from 'src/components/Header';
import Footer from 'src/components/Footer';
import ComponentSeed from './ComponentSeed';

const PageDetailSeed = ({ width, breakpoint }) => (
  <div className="page-detail-seed">
    <Header width={width} breakpoint={breakpoint} />
    <ComponentSeed />
    <Footer width={width} breakpoint={breakpoint} />
  </div>
);

export default PageDetailSeed;
