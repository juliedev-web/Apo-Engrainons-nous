import React from 'react';
// import PropTypes from 'prop-types';

import './styles.scss';

import Cedric from 'src/assets/image/Cedric.jpg';
import Github from 'src/assets/image/github.png';
import LinkedIn from 'src/assets/image/linkedIn.png';

export default function TeamCards() {
  return (
    <div className="container">
      <h2>L'équipe d'Engrainons-nous</h2>
      <section className="card-container">
        <article className="card-dev">
          <h2>Cédric Cubat</h2>
          <img className="photo-profil" src={Cedric} alt="Cedric" />
          <p className="role">Product Owner et Lead dev back</p>
          <div className="socials">
            <ul>
              <li>
                <a href="https://github.com/CedricCT" target="blank">
                  <img className="img-github" src={Github} alt="logo Github" />
                </a>
              </li>
            </ul>
          </div>
        </article>
      </section>
    </div>
  );
}

// FormSignIn.propTypes = {

// };
