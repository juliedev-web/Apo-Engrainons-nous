import React from 'react';
import { Link } from 'react-router-dom';

import './styles.scss';

const FooterDesktop = () => (
  <div className="footer-desktop">
    <Link to="/equipe">L'équipe</Link>
    <p>
      contactengrainonsnous@gmail.com
    </p>
  </div>
);

export default FooterDesktop;
