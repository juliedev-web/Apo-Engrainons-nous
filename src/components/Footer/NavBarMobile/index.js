import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import './styles.scss';

import {
  faUserAlt, faPlus,
} from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const NavBarMobile = ({
  isLogged, handleMenuIsOpenClick, menuIsOpen, closeModal,
}) => (
  <div className="navbar-mobile">
    <NavLink
      onClick={closeModal}
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
      onClick={closeModal}
      className="navbar_link"
      to="/partager-une-graine"
      exact
      activeClassName="navbar_link--active"
    >
      <FontAwesomeIcon icon={faPlus} className="faUserAlt" />
    </NavLink>
    <div
      className={menuIsOpen ? 'menu-burger menu-burger--active' : 'menu-burger'}
      onClick={handleMenuIsOpenClick}
    >
      <div className="barre" />
    </div>
  </div>
);

NavBarMobile.propTypes = {
  isLogged: PropTypes.string.isRequired,
  handleMenuIsOpenClick: PropTypes.func.isRequired,
  menuIsOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,

};

export default NavBarMobile;
