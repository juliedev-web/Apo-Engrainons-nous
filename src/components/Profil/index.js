import React from 'react';
// import PropTypes from 'prop-types';

import Header from 'src/components/Header';
import Footer from 'src/components/Footer';
import FormProfil from 'src/containers/FormProfil';

import './styles.scss';

export default function Profil({ width, breakpoint }) {
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
