import React from 'react';
// import PropTypes from 'prop-types';

import './styles.scss';

export default function FormSignIn() {
  console.log('FormSignIn');
  return (
    <div className="container">
      <h2>Inscription</h2>
      <div className="signInput">
        <input type="text" placeholder="Pseudo" />
        <input type="email" placeholder="Email" />
        <input type="text" placeholder="Ville" />
        <input type="password" placeholder="Mot de passe" />
        <input type="password" placeholder="Confirmer votre mot de passe" />
      </div>
      <button type="button"> <a href="/"> Valider</a></button>
    </div>
  );
};

// FormSignIn.propTypes = {

// };
