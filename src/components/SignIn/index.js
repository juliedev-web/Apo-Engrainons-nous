import React from 'react';

//Components
import Header from 'src/components/Header';
import NavBarMobile from 'src/components/NavBarMobile';
import FormSignIn from './FormSignIn';

import './styles.scss';

export default function SignIn() {
  console.log('Sign-in');
  return (
    <div className="sign-in">
      <Header />
      <FormSignIn />
      <NavBarMobile />
  </div>
  );
}
