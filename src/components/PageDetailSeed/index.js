import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

// == Composant
import Header from 'src/components/Header';
import Footer from 'src/components/Footer';
import ComponentSeed from 'src/containers/ComponentSeed';
import MenuModal from 'src/containers/MenuModal';

const PageDetailSeed = ({ width, breakpoint, menuIsOpen }) => (
  <div className="page-detail-seed">
    <Header width={width} breakpoint={breakpoint} />

    <MenuModal />
    { !menuIsOpen && <ComponentSeed />}
    <Footer width={width} breakpoint={breakpoint} />
  </div>
);

PageDetailSeed.propTypes = {
  width: PropTypes.number.isRequired,
  breakpoint: PropTypes.number.isRequired,
  menuIsOpen: PropTypes.bool.isRequired,
};

export default PageDetailSeed;
