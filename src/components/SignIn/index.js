import React from 'react';

// Components
import Header from 'src/components/Header';
import FormSignIn from './FormSignIn';
import Footer from 'src/components/Footer';

import './styles.scss';

export default function SignIn({width, breakpoint}) {
  console.log('Sign-in');
  return (
    <div className="sign-in">
      <Header width={width} breakpoint={breakpoint} />
      <FormSignIn />
      <Footer width={width} breakpoint={breakpoint} />
    </div>
  );
}
