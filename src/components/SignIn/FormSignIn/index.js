import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

export default function FormSignIn({
  passwordConfirmMessage,

  pseudoInputValue,
  emailInputValue,
  passwordInputValue,
  cityInputValue,
  passwordConfirmInputValue,
  handleInputValueChange,
  handleSubmitSignin,
}) {
  return (
    <div className="container">
      <h2>Inscription</h2>
      <form onSubmit={handleSubmitSignin}>
        <div className="signInput">
          <input name="pseudo" type="text" placeholder="Pseudo" required value={pseudoInputValue} onChange={(e) => handleInputValueChange(e.target.value, 'pseudoInputValue')} />
          <input name="email" type="email" placeholder="Email" required value={emailInputValue} onChange={(e) => handleInputValueChange(e.target.value, 'emailInputValue')} />
          <input name="city" type="text" placeholder="Ville" required value={cityInputValue} onChange={(e) => handleInputValueChange(e.target.value, 'cityInputValue')} />
          <input name="password" type="password" placeholder="Mot de passe" required value={passwordInputValue} onChange={(e) => handleInputValueChange(e.target.value, 'passwordInputValue')} />
          <input name="confirm" type="password" placeholder="Confirmer votre mot de passe" required value={passwordConfirmInputValue} onChange={(e) => handleInputValueChange(e.target.value, 'passwordConfirmInputValue')} />
          {passwordConfirmMessage && <p>{passwordConfirmMessage}</p>}
        </div>
        <button type="submit">Valider</button>
      </form>
    </div>
  );
}

FormSignIn.propTypes = {
  passwordConfirmMessage: PropTypes.string.isRequired,

  pseudoInputValue: PropTypes.string.isRequired,
  emailInputValue: PropTypes.string.isRequired,
  cityInputValue: PropTypes.string.isRequired,
  passwordInputValue: PropTypes.string.isRequired,
  passwordConfirmInputValue: PropTypes.string.isRequired,
  handleInputValueChange: PropTypes.func.isRequired,
  handleSubmitSignin: PropTypes.func.isRequired,
};
