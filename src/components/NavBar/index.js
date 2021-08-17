import React from 'react';

import './styles.scss';

import {
  faUserAlt, faPlus, faBars,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => (
  <div className="footer">
    <FontAwesomeIcon icon={faUserAlt} className="faUserAlt" />
    <FontAwesomeIcon icon={faPlus} className="faUserAlt" />
    <FontAwesomeIcon icon={faBars} className="faUserAlt" />
  </div>
);

export default Footer;
