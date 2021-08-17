import React from 'react';

import './styles.scss';

import {
  faUserAlt, faPlus, faEnvelope, faBars,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => (
  <div className="footer">
    <FontAwesomeIcon icon={faUserAlt} size="lg" className="faUserAlt" />
    <FontAwesomeIcon icon={faPlus} size="lg" className="faUserAlt" />
    <FontAwesomeIcon icon={faEnvelope} size="lg" className="faUserAlt" />
    <FontAwesomeIcon icon={faBars} size="lg" className="faUserAlt" />
  </div>
);

export default Footer;
