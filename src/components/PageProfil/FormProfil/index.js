import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import './styles.scss';

export default function FormProfil({
  pseudoInputValue,
  emailInputValue,
  cityInputValue,
  passwordInputValue,
  passwordConfirmInputValue,
  deleteConfirmMessage,
  confirmDelete,
  handleDeleteClick,
  handleInputValueChange,
  handleSubmitEditProfil,
  validateUpdateProfil,
  closeEditMessage,
  profil,
  editProfil,
  toggleEditProfil,
  handleDisconnect,
  handleDeleteConfirm,
  cancelConfirmDeleteBtn,
  passwordConfirmMessage,
}) {
  useEffect(() => {
    localStorage.setItem('pseudo', profil.pseudo);
    localStorage.setItem('email', profil.email);
    localStorage.setItem('city', profil.city);
  }, [editProfil]);
  console.log(validateUpdateProfil);
  return (
    <div className="container">
      {
        deleteConfirmMessage ? (
          <p className="messageDeleteConfirm">{deleteConfirmMessage}</p>
        )
          : (
            <>
              <h2>Mon compte</h2>
              {
                validateUpdateProfil && (
                  <p className="accountUpdateButton"> {validateUpdateProfil}</p>
                )
              }
              {
                editProfil ? (
                  <form onSubmit={handleSubmitEditProfil}>
                    <div className="signInput">
                      <input name="pseudo" type="text" placeholder="Pseudo" value={pseudoInputValue} onChange={(e) => handleInputValueChange(e.target.value, 'pseudoInputValue')} />
                      <input name="email" type="email" placeholder="Email" value={emailInputValue} onChange={(e) => handleInputValueChange(e.target.value, 'emailInputValue')} />
                      <input name="city" type="text" placeholder="Ville" value={cityInputValue} onChange={(e) => handleInputValueChange(e.target.value, 'cityInputValue')} />
                      <label htmlFor="password"> Au moins 8 caractères, une majuscule, une minuscule, un nombre et un caractère spécial</label>
                      <input name="password" type="password" placeholder="Nouveau mot de passe" value={passwordInputValue} onChange={(e) => handleInputValueChange(e.target.value, 'passwordInputValue')} />
                      <input name="confirm" type="password" placeholder="Confirmer votre nouveau mot de passe" value={passwordConfirmInputValue} onChange={(e) => handleInputValueChange(e.target.value, 'passwordConfirmInputValue')} />
                      {passwordConfirmMessage && <p className="password-not-confirmed-message">{passwordConfirmMessage}</p>}
                    </div>
                    <button
                      className="valider"
                      onClick={() => {
                        setTimeout(() => {
                          closeEditMessage();
                        }, 3000);
                      }}
                      type="submit"
                    >Valider
                    </button>
                  </form>
                )
                  : (
                    <div className="signInput">
                      <p>{profil.pseudo}</p>
                      <p>{profil.email}</p>
                      <p>{profil.city}</p>
                      <p>************</p>
                    </div>
                  )
              }
              {/* Button toggle on click Modify or Cancel */}
              <section className="button-container">
                <button type="button" onClick={toggleEditProfil}> {editProfil ? 'Annuler' : 'Modifier mon compte'}</button>
                <button type="button" className="btn_myseeds">
                  <NavLink
                    to="/mesgraines"
                    exact
                    activeClassName="myseed--active"
                  >
                    Mes graines
                  </NavLink>
                </button>
                <button type="button" className="btn-deconnexion">
                  <NavLink
                    to="/"
                    exact
                    onClick={() => {
                      localStorage.clear();
                      handleDisconnect();
                    }}
                    activeClassName="myseed--active"
                  >Déconnexion
                  </NavLink>
                </button>
                {
                  confirmDelete ? (
                    <button
                      onClick={() => {
                        handleDeleteConfirm();
                      }}
                      className="btn-delete--confirm"
                      type="button"
                    >Cliquer pour confirmer la supression
                    </button>
                  ) : (
                    <button
                      onClick={() => {
                        handleDeleteClick();
                        setTimeout(() => {
                          cancelConfirmDeleteBtn();
                        }, 3000);
                      }}
                      className="btn-delete"
                      type="button"
                    > Supprimer mon compte
                    </button>
                  )
                }
              </section>
            </>
          )
      }

    </div>
  );
}

FormProfil.propTypes = {
  cancelConfirmDeleteBtn: PropTypes.func.isRequired,
  pseudoInputValue: PropTypes.string.isRequired,
  emailInputValue: PropTypes.string.isRequired,
  cityInputValue: PropTypes.string.isRequired,
  passwordInputValue: PropTypes.string.isRequired,
  passwordConfirmInputValue: PropTypes.string.isRequired,
  confirmDelete: PropTypes.bool.isRequired,
  passwordConfirmMessage: PropTypes.string.isRequired,
  validateEditProfil: PropTypes.func.isRequired,
  validateUpdateProfil: PropTypes.func.isRequired,
  deleteConfirmMessage: PropTypes.string.isRequired,
  handleDisconnect: PropTypes.func.isRequired,
  handleInputValueChange: PropTypes.func.isRequired,
  handleDeleteClick: PropTypes.func.isRequired,
  handleSubmitEditProfil: PropTypes.func.isRequired,
  closeEditMessage: PropTypes.func.isRequired,
  handleDeleteConfirm: PropTypes.func.isRequired,
  profil: PropTypes.shape({
    pseudo: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
  }).isRequired,
  editProfil: PropTypes.bool.isRequired,
  toggleEditProfil: PropTypes.func.isRequired,
};
