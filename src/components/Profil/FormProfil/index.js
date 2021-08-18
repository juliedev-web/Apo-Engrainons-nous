import React from 'react';
import { NavLink } from 'react-router-dom';

import './styles.scss';

export default function FormProfil() {
  console.log('FormProfil');
  return (
    <div className="container">
      <h2>Mon compte</h2>
      <div className="signInput">
        <input name="pseudo" type="text" placeholder="Pseudo" />
        <input name="email" type="email" placeholder="Email" />
        <input name="city" type="text" placeholder="Ville" />
        <input name="password" type="password" placeholder="Mot de passe" />
        <input name="confirm" type="password" placeholder="Confirmer votre mot de passe" />
      </div>
      <section className="button-container">
        <button type="button"><a href="/compte"> Valider</a></button>
        <button type="button"><a href="/compte/liste/graine?id=id_graine"> Mes graines</a></button>
        <button className="button-delete" type="button">
          <NavLink to="/"> Supprimer mon compte</NavLink>
        </button>
      </section>
    </div>
  );
};
