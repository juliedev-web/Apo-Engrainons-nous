import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import seed from 'src/assets/image/seed.png';

import './styles.scss';

const Form404 = () => (
  <div className="form-404">
    <h2>Erreur 404</h2>
    <img src={seed} alt="logo 404" className="logo404" />
    <p>J'ai beau être charmante, votre recherche n'en est pas moins désarmante.</p>
    <p>La page que vous recherchez n'existe pas 😉 !</p>
    <NavLink className="navlink" to="/">Retour a l'accueil</NavLink>
  </div>
);

Form404.propTypes = {

};
export default Form404;
