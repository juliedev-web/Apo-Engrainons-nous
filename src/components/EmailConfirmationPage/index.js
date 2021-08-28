import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import Header from 'src/components/Header';
import Footer from 'src/components/Footer';

import './styles.scss';

const EmailConfirmationPage = ({
  checkConfirmEmail, emailConfirmMsg, width, breakpoint,
}) => {
  useEffect(() => {
    checkConfirmEmail();
  });
  return (
    <div className="email-confirmation-page">
      <Header
        className="header"
        width={width}
        breakpoint={breakpoint}
      />

      <h1 className="messageConfirmEmail">{emailConfirmMsg}</h1>
      {emailConfirmMsg === 'Votre email est confirmé ! bienvenue 🙂' && <Link className="link-to-connexion" to="/connexion">Par ici pour vous connecter</Link>}

      <Footer
        width={width}
        breakpoint={breakpoint}
      />
    </div>
  );
};

EmailConfirmationPage.propTypes = {
  checkConfirmEmail: PropTypes.func.isRequired,
  emailConfirmMsg: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  breakpoint: PropTypes.number.isRequired,
};

export default EmailConfirmationPage;
