import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

// == Composant
import Header from 'src/components/Header';
import Footer from 'src/components/Footer';
import FormConnexion from 'src/containers/FormConnexion';

const PageConnexion = ({ width, breakpoint }) => (
  <div className="page-connexion">
    <Header width={width} breakpoint={breakpoint} />
    <FormConnexion />
    <Footer width={width} breakpoint={breakpoint} />
  </div>
);

PageConnexion.propTypes = {
  width: PropTypes.number.isRequired,
  breakpoint: PropTypes.number.isRequired,
};

export default PageConnexion;
