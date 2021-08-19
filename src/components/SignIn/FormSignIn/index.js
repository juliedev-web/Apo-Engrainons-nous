import React from 'react';
// import PropTypes from 'prop-types';

import './styles.scss';

export default function FormSignIn() {
  console.log('FormSignIn');
  return (
    <div className="container">
      <h2>Inscription</h2>
      <form>
        <div className="signInput">
          <input name="pseudo" type="text" placeholder="Pseudo" required/>
          <input name="email" type="email" placeholder="Email" required />
          <input name="city" type="text" placeholder="Ville" required/>
          <input name="password" type="password" placeholder="Mot de passe" required />
          <input name="confirm" type="password" placeholder="Confirmer votre mot de passe" required/>
        </div>
      </form>
      <button type="button"> <a href="/">Valider</a></button>
    </div>
  );
};

// FormSignIn.propTypes = {

// };
