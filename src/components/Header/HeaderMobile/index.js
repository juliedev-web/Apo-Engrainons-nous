import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import logo from 'src/assets/image/Logo.png';

import './styles.scss';

const HeaderMobile = () => (
  <div className="headerMobile">
    <Link to="/page/1">
      <img src={logo} alt="logo feuilles" className="headerMobile__logo" />
    </Link>
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
