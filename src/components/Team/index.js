import React from 'react';

import PropTypes from 'prop-types';

// Components
import Header from 'src/components/Header';
import Footer from 'src/components/Footer';
import TeamCards from './TeamCards';

import './styles.scss';

export default function Team({ width, breakpoint }) {
  return (
    <div className="sign-in">
      <Header width={width} breakpoint={breakpoint} />
      <TeamCards />
      <Footer width={width} breakpoint={breakpoint} />
    </div>
  );
}

Team.propTypes = {
  width: PropTypes.number.isRequired,
  breakpoint: PropTypes.number.isRequired,
};
