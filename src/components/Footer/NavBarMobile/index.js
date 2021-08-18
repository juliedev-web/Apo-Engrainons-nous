import React from 'react';
import { NavLink } from 'react-router-dom';

import './styles.scss';

import {
  faUserAlt, faPlus, faBars,
} from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const NavBarMobile = ( {isLogged }) => (
  <div className="navbar-mobile">
    <NavLink
      className="navbar_link"
      to={isLogged ? '/compte' : '/connexion'}
      exact
      activeClassName="navbar_link--active"
    >
      <FontAwesomeIcon
        icon={faUserAlt}
        className="faUserAlt"
      />
    </NavLink>
    <NavLink
      className="navbar_link"
      to="/partager-une-graine"
      exact
      activeClassName="navbar_link--active"
    >
      <FontAwesomeIcon icon={faPlus} className="faUserAlt" />
    </NavLink>
    <FontAwesomeIcon icon={faBars} className="faUserAlt" />
  </div>
);

export default NavBarMobile;
