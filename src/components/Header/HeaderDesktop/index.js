import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './styles.scss';

import logo from 'src/assets/image/Logo.png';

import {
  faEnvelope,
  faHome,
  faPlus,
  faUserAlt,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const HeaderDesktop = ({ isLogged, pseudo, newMessageCounter }) => (
  <div className="containerTitle">
    <div className="headerDesktop">
      <Link to="/page/1">
        <img src={logo} alt="logo feuilles" className="headerDesktop__logo" />
      </Link>
      <div className="headerDesktop__content">
        <h1 className="headerDesktop__content__title">
          Engrainons-nous !
        </h1>
        <p className="headerDesktop__content__subtitle">
          Bienvenue sur notre plateforme d'échange de graines !
        </p>
      </div>
    </div>
    <div className="menuDesktop">

      <NavLink
        className="navbar_link"
        to="/page/1"
        exact
        activeClassName="navbar_link--active"
      >
        <div className="iconText">
          <FontAwesomeIcon
            icon={faHome}
            className="faUserAlt"
          />
          <span>Accueil</span>
        </div>
      </NavLink>

      <NavLink
        className="navbar_link"
        to="/partager-une-graine"
        exact
        activeClassName="navbar_link--active"
      >
        <div className="iconText">
          <FontAwesomeIcon icon={faPlus} className="faUserAlt" />
          <span>Partager une graine</span>
        </div>
      </NavLink>

      <NavLink
        className="navbar_link"
        to="/tchat"
        exact
        activeClassName="navbar_link--active"
      >
        <div className="iconText">
          <FontAwesomeIcon icon={faEnvelope} className="faUserAlt" />
          <span className="messagerie">Messagerie {
            newMessageCounter !== 0 && (
              <span className="new-message-counter">{newMessageCounter}</span>
            )
          }
          </span>

        </div>
      </NavLink>

      <NavLink
        className="navbar_link"
        to={isLogged ? '/compte' : '/connexion'}
        exact
        activeClassName="navbar_link--active"
      >
        <div className="iconText">
          <FontAwesomeIcon icon={faUserAlt} className="faUserAlt" />
          <span>{pseudo || 'Profil'}</span>
        </div>
      </NavLink>

    </div>
  </div>
);
HeaderDesktop.propTypes = {
  isLogged: PropTypes.bool.isRequired,
  pseudo: PropTypes.string.isRequired,
  newMessageCounter: PropTypes.number.isRequired,
};
export default HeaderDesktop;
