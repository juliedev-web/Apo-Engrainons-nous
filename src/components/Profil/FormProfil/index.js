import React from 'react';
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
  validateEditProfil,
  validateUpdateProfil,
  closeEditMessage,
  profil,
  editProfil,
  toggleEditProfil,
  handleDisconnect,
  handleDeleteConfirm,
  cancelConfirmDeleteBtn,
}) {
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
                      <input name="password" type="password" placeholder="Mot de passe" value={passwordInputValue} onChange={(e) => handleInputValueChange(e.target.value, 'passwordInputValue')} />
                      <input name="confirm" type="password" placeholder="Confirmer votre mot de passe" value={passwordConfirmInputValue} onChange={(e) => handleInputValueChange(e.target.value, 'passwordConfirmInputValue')} />
                    </div>
                    <button
                      className="valider"
                      onClick={() => {
                        validateEditProfil();
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
                      <p> ************ </p>
                    </div>
                  )
              }
              {/* Button toggle on click Modify or Cancel */}
              <section className="button-container">
                <button type="button" onClick={toggleEditProfil}> {editProfil ? 'Annuler' : 'Modifier mon compte'}</button>
                <button type="submit">
                  <NavLink
                    className="myseeds"
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
                    onClick={handleDisconnect}
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
                    >Cliquer pour confirmer la supression.
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
