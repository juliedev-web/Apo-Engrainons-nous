import React from 'react';
import PropTypes from 'prop-types';

import logo from 'src/assets/image/logo.png';

import './styles.scss';

const Header = () => (
  <div className="header">
    <img src={logo} alt="logo feuilles" className="header__logo" />
    <div className="header__content">
      <h1 className="header__content__title">
        Engrainons-nous !
      </h1>
      <p className="header__content__subtitle">
        Bienvenue sur notre plateforme d'échange de graine !
      </p>
    </div>
  </div>
);

Header.propTypes = {

};

export default Header;
