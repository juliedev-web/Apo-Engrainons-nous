import React from 'react';

import './styles.scss';

import PropTypes from 'prop-types';

import Header from 'src/components/Header';
import Filters from 'src/components/Filters';
import List from 'src/containers/List';
import Footer from 'src/components/Footer';
import MenuModal from 'src/containers/MenuModal';

const HomePage = ({
  list,
  width,
  breakpoint,
  menuIsOpen,
}) => (
  <div className="home-page">
    <Header
      width={width}
      breakpoint={breakpoint}
    />

    <MenuModal />

    {
      !menuIsOpen && (
        <>
          <Filters />
          <List list={list} />
        </>
      )
    }

    <Footer
      width={width}
      breakpoint={breakpoint}
    />

  </div>

);

HomePage.propTypes = {
  list: PropTypes.array.isRequired,
  width: PropTypes.number.isRequired,
  breakpoint: PropTypes.number.isRequired,
  menuIsOpen: PropTypes.bool.isRequired,
};

export default HomePage;

// un commentaire
