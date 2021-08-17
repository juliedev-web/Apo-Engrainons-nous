import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

import logo from 'src/assets/image/logo.png';
import {
  faHome, faPlus, faUserAlt,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const HeaderDesktop = () => {
  console.log('toto');
  return (
    <div className="containerTitle">
      <div className="headerDesktop">
        <img src={logo} alt="logo feuilles" className="headerDesktop__logo" />
        <div className="headerDesktop__content">
          <h1 className="headerDesktop__content__title">
            Engrainons-nous !
          </h1>
          <p className="headerDesktop__content__subtitle">
            Bienvenue sur notre plateforme d'échange de graine !
          </p>
        </div>
      </div>
      <div className="menuDesktop">
        <div className="iconText">
          <FontAwesomeIcon icon={faHome} className="faUserAlt" />
          <span>Accueil</span>
        </div>
        <div className="iconText">
          <FontAwesomeIcon icon={faPlus} className="faUserAlt" />
          <span>Partager une graine</span>
        </div>
        <div className="iconText">
          <FontAwesomeIcon icon={faUserAlt} className="faUserAlt" />
          <span>Profil</span>
        </div>
      </div>
    </div>
  );
};

HeaderDesktop.propTypes = {

};
export default HeaderDesktop;
