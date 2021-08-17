import React from 'react';

//Components
import Header from 'src/components/Header';
import NavBar from 'src/components/NavBar';
import FormSignIn from './FormSignIn';

import './styles.scss';

export default function SignIn() {
  console.log('Sign-in');
  return (
    <div className="sign-in">
      <Header />
      <FormSignIn />
      <NavBar />
  </div>
  );
}
