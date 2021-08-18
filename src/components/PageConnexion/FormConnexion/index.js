import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import './styles.scss';

const FormConnexion = () => (
  <div className="connexion-input">
    <h2>Connexion</h2>
    <input type="email" name="email" placeholder="Email" />
    <input type="password" name="password" placeholder="Mot de passe" />
    <button type="button">Valider</button>
    <a>Mot de passe oublié</a>
    <NavLink
      to="/inscription"
      exact
    >
      Inscrivez-vous
    </NavLink>
  </div>
);

FormConnexion.propTypes = {

};

export default FormConnexion;
