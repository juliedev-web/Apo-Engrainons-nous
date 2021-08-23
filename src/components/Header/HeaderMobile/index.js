import React from 'react';
import PropTypes from 'prop-types';

import logo from 'src/assets/image/logo.png';

import './styles.scss';

const HeaderMobile = () => (
  <div className="headerMobile">
    <img src={logo} alt="logo feuilles" className="headerMobile__logo" />
    <div className="headerMobile__content">
      <h1 className="headerMobile__content__title">
        Engrainons-nous !
      </h1>
      <p className="headerMobile__content__subtitle">
        Bienvenue sur notre plateforme d'échange de graine !
      </p>
    </div>
  </div>
);

HeaderMobile.propTypes = {

};

export default HeaderMobile;
