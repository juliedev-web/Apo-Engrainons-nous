import React from 'react';

import PropTypes from 'prop-types';

import Header from 'src/components/Header';
import Filters from 'src/components/Filters';
import List from 'src/components/List';
import Footer from 'src/components/Footer';

const HomePage = ({
  list,
  width,
  breakpoint,
  isLogged,
}) => {
  console.log('isLoggedHomepage', isLogged);

  return (
    <div className="home-page">
      <Header
        width={width}
        breakpoint={breakpoint}
        isLogged={isLogged}
      />

      <Filters />

      <List list={list} />

      <Footer
        width={width}
        breakpoint={breakpoint}
        isLogged={isLogged}
      />
    </div>
  );
};

HomePage.propTypes = {
  list: PropTypes.array.isRequired,
  width: PropTypes.number.isRequired,
  breakpoint: PropTypes.number.isRequired,
  isLogged: PropTypes.bool.isRequired,
};

export default HomePage;

// un commentaire
