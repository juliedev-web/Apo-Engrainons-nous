import React from 'react';

import PropTypes from 'prop-types';

// Components
import Header from 'src/components/Header';
import Footer from 'src/components/Footer';
import FormSignIn from './FormSignIn';

import './styles.scss';

export default function SignIn({ width, breakpoint }) {
  console.log('Sign-in');
  return (
    <div className="sign-in">
      <Header width={width} breakpoint={breakpoint} />
      <FormSignIn />
      <Footer width={width} breakpoint={breakpoint} />
    </div>
  );
}

SignIn.propTypes = {
  width: PropTypes.number.isRequired,
  breakpoint: PropTypes.number.isRequired,
};
