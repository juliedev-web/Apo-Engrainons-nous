import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

export default function FormProfil({
  pseudoInputValue,
  emailInputValue,
  cityInputValue,
  passwordInputValue,
  passwordConfirmInputValue,
  passwordConfirmMessage,
  handleInputValueChange,
  handleSubmitEditProfil,
  profil,
  editProfil,
  toggleEditProfil,
}) {
  return (
    <div className="container">
      <h2>Mon compte</h2>
      {/* Show profil informations or inputs to modify profil infos */}
      {
      editProfil ? (
        <form onSubmit={handleSubmitEditProfil}>
          <div className="signInput">
            <input name="pseudo" type="text" placeholder="Pseudo" value={pseudoInputValue} onChange={(e) => handleInputValueChange(e.target.value, 'pseudoInputValue')} />
            <input name="email" type="email" placeholder="Email" value={emailInputValue} onChange={(e) => handleInputValueChange(e.target.value, 'emailInputValue')} />
            <input name="city" type="text" placeholder="Ville" value={cityInputValue} onChange={(e) => handleInputValueChange(e.target.value, 'cityInputValue')} />
            <label> Au moins 8 caractères, une majuscule, une minuscule et un caractère spécial</label>
            <input name="password" type="password" placeholder="Mot de passe" value={passwordInputValue} onChange={(e) => handleInputValueChange(e.target.value, 'passwordInputValue')} />
            <input name="confirm" type="password" placeholder="Confirmer votre mot de passe" value={passwordConfirmInputValue} onChange={(e) => handleInputValueChange(e.target.value, 'passwordConfirmInputValue')} />
            {passwordConfirmMessage && <p className="password-not-confirmed-message">{passwordConfirmMessage}</p>}
          </div>
          <button className="valider" type="submit">Valider</button>
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
      {/* Button toggle on click Modify or Cancel */}
      <section className="button-container">
        <button type="button" onClick={toggleEditProfil}> {editProfil ? 'Annuler' : 'Modifier mon compte'}</button>
        <button type="submit"> Mes graines</button>
        <button className="btn-delete" type="submit"> Supprimer mon compte</button>
      </section>
    </div>
  );
}

FormProfil.propTypes = {
  pseudoInputValue: PropTypes.string.isRequired,
  emailInputValue: PropTypes.string.isRequired,
  cityInputValue: PropTypes.string.isRequired,
  passwordInputValue: PropTypes.string.isRequired,
  passwordConfirmInputValue: PropTypes.string.isRequired,
  passwordConfirmMessage: PropTypes.string.isRequired,
  handleInputValueChange: PropTypes.func.isRequired,
  handleSubmitEditProfil: PropTypes.func.isRequired,
  profil: PropTypes.shape({
    pseudo: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
  }).isRequired,
  editProfil: PropTypes.bool.isRequired,
  toggleEditProfil: PropTypes.func.isRequired,
};
