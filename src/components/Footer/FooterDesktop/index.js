import React from 'react';
import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';

import './styles.scss';

const FooterDesktop = () => (
  <div className="footer-desktop">
    <Link to="/equipe">L'équipe</Link>
    <p>
      contactengrainonsnous@gmail.com
    </p>
  </div>
);

FooterDesktop.propTypes = {

};

export default FooterDesktop;
