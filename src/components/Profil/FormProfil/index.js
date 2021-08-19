import React from 'react';
import { Link } from 'react-router-dom';

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
        <Link className="btn ok valider" href="/compte"> Valider</Link>
        <Link className="btn ok mes-graines" href="/compte/liste/graine?id=id_graine"> Mes graines</Link>
        <Link className="btn supprimer" to="/"> Supprimer mon compte</Link>
      </section>
    </div>
  );
}
