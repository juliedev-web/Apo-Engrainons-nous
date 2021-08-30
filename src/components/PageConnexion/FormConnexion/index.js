/* eslint-disable max-len */
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
  hideFieldConnexion,
  fieldConnexion,
  emailResetInputValue,
  handleInputValuePasswordResetChange,
  handleSubmitReset,
  validateSendMsgResetPwd,
  showFieldConnexion,
  handleCancelReinitPwd,
}) => {
  const history = useHistory();

  useEffect(() => {
    if (isLogged) setTimeout(() => history.push('/'), 1000);
    if (!isLogged || connectionSuccessMessage) setTimeout(() => closeMessage(), 1200);
  }, [isLogged, connectionFailedMessage]);

  const onSubmit = (e) => {
    handleSubmitSignin(e);
  };
  return (
    <>
      {
        fieldConnexion ? (
          <div className="field-connexion">
            {
              validateSendMsgResetPwd && (
                <p className="messageMailRedirect">{validateSendMsgResetPwd}
                  <NavLink
                    className="navlink_redirect_loggin"
                    to="/connexion"
                    exact
                    onClick={showFieldConnexion}
                  > Cliquez ici pour vous connecter
                  </NavLink>
                </p>
              )
            }
            <form className="validate-message" onSubmit={(e) => handleSubmitReset(e)}>
              {
                !validateSendMsgResetPwd && (
                  <h2>Veuillez saisir votre adresse email afin de réinitialiser votre mot de passe</h2>
                )
              }
              <input type="email" value={emailResetInputValue} onChange={(e) => handleInputValuePasswordResetChange(e.target.value)} />
              <button type="submit">Valider</button>
            </form>
            <p onClick={handleCancelReinitPwd} className="annuler-reinitialisation-mdp">Annuler</p>
          </div>
        )
          : (
            <div className="connexion-input">
              <h2>Connexion</h2>
              <form onSubmit={onSubmit}>
                <input type="email" name="email" placeholder="Email" required value={emailInputValue} onChange={(e) => handleInputValueChange(e.target.value, 'emailInputValue')} />
                <input type="password" name="password" placeholder="Mot de passe" required value={passwordInputValue} onChange={(e) => handleInputValueChange(e.target.value, 'passwordInputValue')} />
                {(connectionFailedMessage) && <p className="connection-not-confirmed-message">{connectionFailedMessage}</p>}
                {(connectionSuccessMessage) && <p className="connection-confirmed-message">{connectionSuccessMessage}</p>}
                <button type="submit">Valider</button>
              </form>
              <Link
                to="#"
                onClick={hideFieldConnexion}
                className="forget-password"
              >Mot de passe oublié ?
              </Link>
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
          )

      }
    </>

  );
};
FormConnexion.propTypes = {
  handleSubmitSignin: PropTypes.func.isRequired,
  handleCancelReinitPwd: PropTypes.func.isRequired,
  connectionFailedMessage: PropTypes.string.isRequired,
  handleSubmitReset: PropTypes.func.isRequired,
  validateSendMsgResetPwd: PropTypes.string.isRequired,
  showFieldConnexion: PropTypes.func.isRequired,
  hideFieldConnexion: PropTypes.func.isRequired,
  passwordInputValue: PropTypes.string.isRequired,
  emailInputValue: PropTypes.string.isRequired,
  handleInputValueChange: PropTypes.func.isRequired,
  isLogged: PropTypes.bool.isRequired,
  closeMessage: PropTypes.func.isRequired,
  connectionSuccessMessage: PropTypes.string.isRequired,
  fieldConnexion: PropTypes.bool.isRequired,
  emailResetInputValue: PropTypes.string.isRequired,
  handleInputValuePasswordResetChange: PropTypes.func.isRequired,
};

export default FormConnexion;
