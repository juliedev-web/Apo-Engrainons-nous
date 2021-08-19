import React from 'react';
import { Link } from 'react-router-dom';

import './styles.scss';

export default function FormProfil() {
  console.log('FormProfil');

  const editProfil = false;
  return (
    <div className="container">
      <h2>Mon compte</h2>
      {
      editProfil ? (
        <form action="">
          <div className="signInput">
            <input name="pseudo" type="text" placeholder="Pseudo" required />
            <input name="email" type="email" placeholder="Email" required />
            <input name="city" type="text" placeholder="Ville" required />
            <input name="password" type="password" placeholder="Mot de passe" required />
            <input name="confirm" type="password" placeholder="Confirmer votre mot de passe" required />
          </div>
        </form>
      )
        : (
          <div className="signInput">
            <p>pseudo</p>
            <p>email</p>
            <p>city</p>
          </div>
        )
      }
      <section className="button-container">
        <Link className="btn ok valider" href="/compte"> Valider</Link>
        <Link className="btn ok mes-graines" href="/compte/liste/graine?id=id_graine"> Mes graines</Link>
        <Link className="btn supprimer" to="/"> Supprimer mon compte</Link>
      </section>
    </div>
  );
}
