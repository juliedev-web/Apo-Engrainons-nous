import React from 'react';

import './styles.scss';

import {
  faUserAlt, faPlus, faEnvelope, faBars,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => (
  <div className="footer">
    <FontAwesomeIcon icon={faUserAlt} size="2x" className="faUserAlt" />
    <FontAwesomeIcon icon={faPlus} size="2x" className="faUserAlt" />
    <FontAwesomeIcon icon={faEnvelope} size="2x" className="faUserAlt" />
    <FontAwesomeIcon icon={faBars} size="2x" className="faUserAlt" />
  </div>
);

export default Footer;
