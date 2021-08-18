import React from 'react';

import Header from 'src/components/Header';
import Filters from 'src/components/Filters';
import List from 'src/components/List';
import Footer from 'src/components/Footer';

const HomePage = ({ list, width, breakpoint, isLogged }) => {
  console.log('isLoggedHomepage', isLogged);
  return (
    <div className="home-page">
      <Header width={width} breakpoint={breakpoint} isLogged={isLogged} />
      <Filters />
      <List list={list} />
      <Footer width={width} breakpoint={breakpoint} isLogged={isLogged} />
    </div>
  );
};

export default HomePage;
