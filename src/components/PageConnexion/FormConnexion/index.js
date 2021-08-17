import React from 'react';

const FormConnexion = () => {
  console.log('toto');
  return (
    <div className="connexion-input">
      <h2>Connexion</h2>
      <input type="text" placeholder="Email" />
      <input type="text" placeholder="Mot de passe" />
      <a>Mot de passe oublié ?</a>
      <button type="button">Valider</button>
      <p>Pas encore de compte <a href="">Inscrivez-vous</a></p>
    </div>
  );
};

export default FormConnexion;
