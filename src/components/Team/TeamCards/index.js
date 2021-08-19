import React from 'react';
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';

import './styles.scss';

import Cedric from 'src/assets/image/Cedric.jpg';
import Github from 'src/assets/image/github.png';
import LinkedIn from 'src/assets/image/linkedIn.png';

export default function TeamCards() {
  console.log('TeamCards');
  return (
    <div className="container">
      <h2>L'équipe d'Engrainons-nous</h2>
      <section className="card-container">
        <article className="card-dev">
          <img src={Cedric} alt="photo de profil"/>
          <h2>Cédric Cubat</h2>
          <p>Product Owner et Lead dev back</p>
          <div className="socials">
            <ul>
              <li>
                <Link
                  to="https://github.com/"
                >
                  <img src={Github} alt="logo Github" />
                </Link>
              </li>
              <li>
                <Link
                  to="https://https://www.linkedin.com/"
                >
                  <img src={LinkedIn} alt="logo Github" />
                </Link>
              </li>
            </ul>
          </div>
        </article>
      </section>
    </div>
  );
};

// FormSignIn.propTypes = {

// };
