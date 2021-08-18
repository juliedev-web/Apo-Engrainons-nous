import React from 'react';
// import PropTypes from 'prop-types';

import Header from 'src/components/Header';
import FormProfil from './FormProfil';
import Footer from 'src/components/Footer';

import './styles.scss';

export default function Profil({width, breakpoint}) {
  console.log('Sign-in');
  return (
    <div className="sign-in">
      <Header width={width} breakpoint={breakpoint} />
      <FormProfil />
      <Footer width={width} breakpoint={breakpoint} />
    </div>
  );
}

// FormSignIn.propTypes = {

// };
