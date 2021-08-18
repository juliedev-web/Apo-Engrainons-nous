import React from 'react';

import Header from 'src/components/Header';
import Filters from 'src/components/Filters';
import List from 'src/components/List';
import Footer from 'src/components/Footer';

const HomePage = ({ list, width, breakpoint }) => {
  console.log('');
  return (
    <div className="home-page">
      <Header width={width} breakpoint={breakpoint} />
      <Filters />
      <List list={list} />
      <Footer width={width} breakpoint={breakpoint} />
    </div>
  );
};

export default HomePage;
