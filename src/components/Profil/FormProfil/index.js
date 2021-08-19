import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

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
}) {
  console.log('FormProfil');

  const editProfil = true;
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
            <input name="password" type="password" placeholder="Mot de passe" required value={passwordInputValue} onChange={(e) => handleInputValueChange(e.target.value, 'passwordInputValue')} />
            <input name="confirm" type="password" placeholder="Confirmer votre mot de passe" required value={passwordConfirmInputValue} onChange={(e) => handleInputValueChange(e.target.value, 'passwordConfirmInputValue')} />
            {passwordConfirmMessage && <p>{passwordConfirmMessage}</p>}
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

FormProfil.propTypes = {
  passwordConfirmMessage: PropTypes.string.isRequired,
  pseudoInputValue: PropTypes.string.isRequired,
  emailInputValue: PropTypes.string.isRequired,
  cityInputValue: PropTypes.string.isRequired,
  passwordInputValue: PropTypes.string.isRequired,
  passwordConfirmInputValue: PropTypes.string.isRequired,
  handleInputValueChange: PropTypes.func.isRequired,
  handleSubmitProfil: PropTypes.func.isRequired,
};
