import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const FormConnexion = () => {
  console.log('toto');
  return (
    <div className="connexion-input">
      <h2>Connexion</h2>
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Mot de passe" />
      <button type="button">Valider</button>
      <a>Mot de passe oublié</a>
      <a href="">Inscrivez-vous</a>
    </div>
  );
};

FormConnexion.propTypes = {

};

export default FormConnexion;
