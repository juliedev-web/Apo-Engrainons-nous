import React from 'react';
import { NavLink } from 'react-router-dom';
import seed from 'src/assets/image/seed.png';

import './styles.scss';

const Form404 = () => (
  <div className="form-404">
    <h2>Vous vous êtes <span>planté !</span> 😁</h2>
    <h3>404</h3>
    <img src={seed} alt="logo 404" className="logo404" />
    <p>J'ai beau être charmante, votre recherche n'en est pas moins désarmante.</p>
    <p>La page que vous recherchez n'existe pas !</p>
    <NavLink exact className="navlink" to="/">Retour a l'accueil</NavLink>
  </div>
);

export default Form404;
