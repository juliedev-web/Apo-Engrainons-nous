import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

export default function FormProfil({
  pseudoInputValue,
  emailInputValue,
  cityInputValue,
  handleInputValueChange,
  handleSubmitProfil,
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
        <form onSubmit={handleSubmitProfil}>
          <div className="signInput">
            <input name="pseudo" type="text" placeholder="Pseudo" required value={pseudoInputValue} onChange={(e) => handleInputValueChange(e.target.value, 'pseudoInputValue')} />
            <input name="email" type="email" placeholder="Email" required value={emailInputValue} onChange={(e) => handleInputValueChange(e.target.value, 'emailInputValue')} />
            <input name="city" type="text" placeholder="Ville" required value={cityInputValue} onChange={(e) => handleInputValueChange(e.target.value, 'cityInputValue')} />
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
  handleInputValueChange: PropTypes.func.isRequired,
  handleSubmitProfil: PropTypes.func.isRequired,
  profil: PropTypes.shape({
    pseudo: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
  }).isRequired,
  editProfil: PropTypes.bool.isRequired,
  toggleEditProfil: PropTypes.func.isRequired,
};
