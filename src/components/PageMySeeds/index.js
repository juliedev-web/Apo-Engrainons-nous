import React from 'react';

import Header from 'src/components/Header';
import Footer from 'src/components/Footer';
import SeedsList from './SeedsList';

import './styles.scss';

export default function MySeeds() {
  return (
    <div className="myseeds">
      <Header width={width} breakpoint={breakpoint} />
      <SeedsList />
      <Footer width={width} breakpoint={breakpoint} />
    </div>
  );
}
