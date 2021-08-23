import React from 'react';

import Header from 'src/components/Header';
import Footer from 'src/components/Footer';
import PropTypes from 'prop-types';
import FormShareSeed from 'src/containers/FormShareSeed';

import './styles.scss';

const PageShareSeed = ({ width, breakpoint }) => (
  <div className="page-share-seed">
    <Header width={width} breakpoint={breakpoint} />
    <FormShareSeed />
    <Footer width={width} breakpoint={breakpoint} />
  </div>
);

PageShareSeed.propTypes = {
  width: PropTypes.number.isRequired,
  breakpoint: PropTypes.number.isRequired,
};

export default PageShareSeed;
