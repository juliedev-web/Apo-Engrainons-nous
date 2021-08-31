import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

import './styles.scss';

export default function FormSignIn({
  passwordConfirmMessage,
  inscriptionConfirmMessage,
  pseudoInputValue,
  emailInputValue,
  passwordInputValue,
  cityInputValue,
  passwordConfirmInputValue,
  handleInputValueChange,
  handleSubmitSignin,
  closePasswordConfirmMessage,
}) {
  useEffect(() => () => {
    closePasswordConfirmMessage();
  }, []);

  const history = useHistory();

  const onSubmit = (e) => {
    localStorage.setItem('pseudo', pseudoInputValue);
    localStorage.setItem('chatEngine_email', emailInputValue);
    handleSubmitSignin(e);
  };

  return (
    <div className="container">
      <h2>Inscription</h2>
      {inscriptionConfirmMessage ? (
        <>
          <p className="inscription-confirm-message">{inscriptionConfirmMessage}</p>
          <p className="inscription-confirm-message">Vous allez recevoir un email avec un lien de confirmation pour pouvoir vous connecter !</p>
        </>
      ) : (
        <form onSubmit={onSubmit}>
          <section className="btn-input-container">
            <div className="signInput">
              <input name="pseudo" type="text" placeholder="Pseudo" required value={pseudoInputValue} onChange={(e) => handleInputValueChange(e.target.value, 'pseudoInputValue')} />
              <input name="email" type="email" placeholder="Email" required value={emailInputValue} onChange={(e) => handleInputValueChange(e.target.value, 'emailInputValue')} />
              <input name="city" type="text" placeholder="Ville" required value={cityInputValue} onChange={(e) => handleInputValueChange(e.target.value, 'cityInputValue')} />
              <label>*Au moins 8 caractères, une majuscule, une minuscule, un nombre et un caractère spécial</label>
              <input name="password" type="password" placeholder="Mot de passe" required value={passwordInputValue} onChange={(e) => handleInputValueChange(e.target.value, 'passwordInputValue')} />
              <input name="confirm" type="password" placeholder="Confirmer votre mot de passe" required value={passwordConfirmInputValue} onChange={(e) => handleInputValueChange(e.target.value, 'passwordConfirmInputValue')} />
              {passwordConfirmMessage && <p className="password-not-confirmed-message">{passwordConfirmMessage}</p>}
            </div>
            <button type="submit">Valider</button>
          </section>
        </form>
      )}
    </div>
  );
}

FormSignIn.propTypes = {
  passwordConfirmMessage: PropTypes.string.isRequired,
  inscriptionConfirmMessage: PropTypes.string.isRequired,
  pseudoInputValue: PropTypes.string.isRequired,
  emailInputValue: PropTypes.string.isRequired,
  cityInputValue: PropTypes.string.isRequired,
  passwordInputValue: PropTypes.string.isRequired,
  passwordConfirmInputValue: PropTypes.string.isRequired,
  handleInputValueChange: PropTypes.func.isRequired,
  handleSubmitSignin: PropTypes.func.isRequired,
  closePasswordConfirmMessage: PropTypes.func.isRequired,
};
