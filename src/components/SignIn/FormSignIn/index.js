import React from 'react';

import './styles.scss';

export default function FormSignIn() {
  console.log('FormSignIn');
  return (
    <div className="form-sign-in">
      <h1>Inscription</h1>
        <input type="text" placeholder="Pseudo" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Mot de passe" />
        <input type="password" placeholder="Confirmation du mot de passe" />
        <input type="text" placeholder="Ville" />
      <button type="button">Valider</button>
    </div>
  );
};
