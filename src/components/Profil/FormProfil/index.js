import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

export default function FormProfil({
  passwordConfirmMessage,
  pseudoInputValue,
  emailInputValue,
  cityInputValue,
  passwordInputValue,
  passwordConfirmInputValue,
  handleInputValueChange,
  handleSubmitProfil,
  profil,
}) {
  console.log('FormProfil');

  const editProfil = false;
  return (
    <div className="container">
      <h2>Mon compte</h2>
      {
      editProfil ? (
        <form onSubmit={handleSubmitProfil}>
          <div className="signInput">
            <input name="pseudo" type="text" placeholder="Pseudo" required value={pseudoInputValue} onChange={(e) => handleInputValueChange(e.target.value, 'pseudoInputValue')} />
            <input name="email" type="email" placeholder="Email" required value={emailInputValue} onChange={(e) => handleInputValueChange(e.target.value, 'emailInputValue')} />
            <input name="city" type="text" placeholder="Ville" required value={cityInputValue} onChange={(e) => handleInputValueChange(e.target.value, 'cityInputValue')} />
            <label> Au moins 8 caractères, une majuscule, une minuscule et un caractère spécial</label>
            <input name="password" type="password" placeholder="Mot de passe" required value={passwordInputValue} onChange={(e) => handleInputValueChange(e.target.value, 'passwordInputValue')} />
            <input name="confirm" type="password" placeholder="Confirmer votre mot de passe" required value={passwordConfirmInputValue} onChange={(e) => handleInputValueChange(e.target.value, 'passwordConfirmInputValue')} />
            {passwordConfirmMessage && <p>{passwordConfirmMessage}</p>}
          </div>
        </form>
      )
        : (
          <div className="signInput">
            <p>{profil.pseudo}</p>
            <p>{profil.email}</p>
            <p>{profil.city}</p>
          </div>
        )
      }
      <section className="button-container">
        <button type="submit"> Modifier mon compte</button>
        <button type="submit"> Valider</button>
        <button type="submit"> Mes graines</button>
        <button className="btn-delete" type="submit"> Supprimer mon compte</button>
      </section>
    </div>
  );
}

FormProfil.propTypes = {
  passwordConfirmMessage: PropTypes.string.isRequired,
  pseudoInputValue: PropTypes.string.isRequired,
  emailInputValue: PropTypes.string.isRequired,
  cityInputValue: PropTypes.string.isRequired,
  passwordInputValue: PropTypes.string.isRequired,
  passwordConfirmInputValue: PropTypes.string.isRequired,
  handleInputValueChange: PropTypes.func.isRequired,
  handleSubmitProfil: PropTypes.func.isRequired,
  profil: PropTypes.shape({
    pseudo: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
  }).isRequired,
};
