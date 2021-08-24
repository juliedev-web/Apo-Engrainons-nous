import React from 'react';

import PropTypes from 'prop-types';

// Components
import Header from 'src/components/Header';
import Footer from 'src/components/Footer';
import FormSignIn from 'src/containers/FormSignIn';
import MenuModal from 'src/containers/MenuModal';

import './styles.scss';

export default function SignIn({ width, breakpoint, menuIsOpen }) {
  return (
    <div className="sign-in">
      <Header width={width} breakpoint={breakpoint} />
      <MenuModal />
      { !menuIsOpen && <FormSignIn /> }
      <Footer width={width} breakpoint={breakpoint} />
    </div>
  );
}

SignIn.propTypes = {
  width: PropTypes.number.isRequired,
  breakpoint: PropTypes.number.isRequired,
};
