import React from 'react';
import PropTypes from 'prop-types';
import { NavLink, Link } from 'react-router-dom';

import './styles.scss';

const FormConnexion = () => (
  <div className="connexion-input">
    <h2>Connexion</h2>
    <input type="email" name="email" placeholder="Email" />
    <input type="password" name="password" placeholder="Mot de passe" />
    <button type="button">Valider</button>
    <Link className="forget-password" to="#">Mot de passe oublié ?</Link>
    <div className="insciption">
      <span className="no-account">Pas encore de compte ? </span>
      <NavLink
        to="/inscription"
        exact
      >
        <span className="subscribe">Inscrivez-vous</span>
      </NavLink>
    </div>
  </div>
);

FormConnexion.propTypes = {

};

export default FormConnexion;
