import React from 'react';
import PropTypes from 'prop-types';

import Header from 'src/components/Header';
import Footer from 'src/components/Footer';
import SeedsList from 'src/containers/UserSeedsList';
import MenuModal from 'src/containers/MenuModal';

import './styles.scss';

export default function MySeeds({ width, breakpoint, menuIsOpen }) {
  return (
    <div className="myseeds">
      <Header width={width} breakpoint={breakpoint} />
      <MenuModal />
      {
        !menuIsOpen && (
          <>
            <SeedsList width={width} breakpoint={breakpoint} />
          </>
        )
      }

      <Footer width={width} breakpoint={breakpoint} />
    </div>
  );
}

MySeeds.propTypes = {
  width: PropTypes.number.isRequired,
  breakpoint: PropTypes.number.isRequired,
  menuIsOpen: PropTypes.bool.isRequired,
};
