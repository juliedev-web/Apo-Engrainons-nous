import React from 'react';

import './styles.scss';

import {
  faUserAlt, faPlus, faBars,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const NavBar = () => (
  <div className="navbar">
    <FontAwesomeIcon icon={faUserAlt} className="faUserAlt" />
    <FontAwesomeIcon icon={faPlus} className="faUserAlt" />
    <FontAwesomeIcon icon={faBars} className="faUserAlt" />
  </div>
);

export default NavBar;