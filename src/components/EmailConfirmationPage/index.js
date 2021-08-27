import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const EmailConfirmationPage = ({ checkConfirmEmail }) => {
  useEffect(() => {
    checkConfirmEmail();
  });
  return (
    <div className="email-confirmation-page">
      <h1>Email confirmé ! Bienvenue 😊</h1>
    </div>
  );
};

EmailConfirmationPage.propTypes = {
  checkConfirmEmail: PropTypes.func.isRequired,
};

export default EmailConfirmationPage;
