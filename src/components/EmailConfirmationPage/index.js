// == Import npm
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';

// == import Component
import Header from 'src/components/Header';
import Footer from 'src/components/Footer';

import './styles.scss';

// == Component
const EmailConfirmationPage = ({
  checkConfirmEmail, emailConfirmMsg, width, breakpoint,
}) => {
  useEffect(() => {
    checkConfirmEmail(localStorage.getItem('pseudo'), localStorage.getItem('chatEngine_email'));
  });
  return (
    <div className="email-confirmation-page">
      <Header
        className="header"
        width={width}
        breakpoint={breakpoint}
      />

      <p className="messageConfirmEmail">{emailConfirmMsg}</p>
      {emailConfirmMsg === 'Votre email est confirmé ! Bienvenue 🙂' && <Link className="link-to-connexion" to="/connexion">Par ici pour vous connecter</Link>}

      <Footer
        width={width}
        breakpoint={breakpoint}
      />
    </div>
  );
};

// == Props validation
EmailConfirmationPage.propTypes = {
  checkConfirmEmail: PropTypes.func.isRequired,
  emailConfirmMsg: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  breakpoint: PropTypes.number.isRequired,
};

export default EmailConfirmationPage;
