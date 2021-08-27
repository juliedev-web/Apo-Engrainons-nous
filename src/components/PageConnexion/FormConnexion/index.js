import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { NavLink, Link, useHistory } from 'react-router-dom';

import './styles.scss';

const FormConnexion = ({
  emailInputValue,
  passwordInputValue,
  handleInputValueChange,
  handleSubmitSignin,
  connectionFailedMessage,
  isLogged,
  closeMessage,
  connectionSuccessMessage,
}) => {
  const history = useHistory();

  useEffect(() => {
    if (isLogged) setTimeout(() => history.push('/'), 3000);
    if (!isLogged || connectionSuccessMessage) setTimeout(() => closeMessage(), 2900);
  }, [isLogged, connectionFailedMessage]);

  const onSubmit = (e) => {
    handleSubmitSignin(e);
  };
  return (
    <div className="connexion-input">
      <h2>Connexion</h2>
      <form onSubmit={onSubmit}>
        <input type="email" name="email" placeholder="Email" required value={emailInputValue} onChange={(e) => handleInputValueChange(e.target.value, 'emailInputValue')} />
        <input type="password" name="password" placeholder="Mot de passe" required value={passwordInputValue} onChange={(e) => handleInputValueChange(e.target.value, 'passwordInputValue')} />
        {(connectionFailedMessage) && <p className="connection-not-confirmed-message">{connectionFailedMessage}</p>}
        {(connectionSuccessMessage) && <p className="connection-confirmed-message">{connectionSuccessMessage}</p>}
        <button type="submit">Valider</button>
      </form>
      <Link className="forget-password" to="#">Mot de passe oublié ?</Link>
      <div className="insciption">
        <span className="no-account">Pas encore de compte ? </span>
        <NavLink
          to="/inscription"
          exact
        >
          <span className="subscribe">Inscrivez-vous</span>
        </NavLink>
      </div>
    </div>
  );
};
FormConnexion.propTypes = {
  handleSubmitSignin: PropTypes.func.isRequired,
  connectionFailedMessage: PropTypes.string.isRequired,
};

export default FormConnexion;
