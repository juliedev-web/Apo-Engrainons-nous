import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

// == Composant
import Header from 'src/components/Header';
import Footer from 'src/components/Footer';
import FormConnexion from 'src/containers/FormConnexion';
import MenuModal from 'src/containers/MenuModal';

const PageConnexion = ({ width, breakpoint, menuIsOpen }) => (
  <div className="page-connexion">
    <Header width={width} breakpoint={breakpoint} />
    <MenuModal />
    { !menuIsOpen && <FormConnexion />}
    <Footer width={width} breakpoint={breakpoint} />
  </div>
);

PageConnexion.propTypes = {
  width: PropTypes.number.isRequired,
  breakpoint: PropTypes.number.isRequired,
  menuIsOpen: PropTypes.bool.isRequired,
};

export default PageConnexion;
