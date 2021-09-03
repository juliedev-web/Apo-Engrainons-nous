import React from 'react';

import './styles.scss';

// Icons for social medias
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLinkedin,
  faGithubSquare,
  faTwitterSquare,
} from '@fortawesome/free-brands-svg-icons';

export default function TeamCards() {
  return (
    <div className="team-container">
      <h3 className="team-title">L'équipe d'Engrainons-nous</h3>
      <section className="card-container">
        <article className="card-dev">
          <h4 className="name">Cédric Cubat</h4>
          <div className="photo-profil photo-profil_cedric" />
          <p className="role">Product Owner et lead dev back</p>
          <div>
            <ul className="socials">
              <li className="socials-links">
                <a href="https://www.linkedin.com/in/cedriccubat/" target="_blank" rel="noreferrer">
                  <FontAwesomeIcon icon={faLinkedin} className="fa-icon" />
                </a>
              </li>
              <li className="socials-links">
                <a href="https://github.com/CedricCT" target="_blank" rel="noreferrer">
                  <FontAwesomeIcon icon={faGithubSquare} className="fa-icon" />
                </a>
              </li>
              <li className="socials-links">
                <a href="https://twitter.com/Cedric_Arkyun" target="_blank" rel="noreferrer">
                  <FontAwesomeIcon icon={faTwitterSquare} className="fa-icon" />
                </a>
              </li>
            </ul>
          </div>
        </article>
        <article className="card-dev">
          <h4 className="name">Kévin Girault</h4>
          <div className="photo-profil photo-profil_kevin" />
          <p className="role">Dev back et référent technique</p>
          <div>
            <ul className="socials">
              <li className="socials-links">
                <a href="#" target="_blank" rel="noreferrer">
                  <FontAwesomeIcon icon={faLinkedin} className="fa-icon" />
                </a>
              </li>
              <li className="socials-links">
                <a href="# " target="_blank" rel="noreferrer">
                  <FontAwesomeIcon icon={faGithubSquare} className="fa-icon" />
                </a>
              </li>
              <li className="socials-links">
                <a href="#" target="_blank" rel="noreferrer">
                  <FontAwesomeIcon icon={faTwitterSquare} className="fa-icon" />
                </a>
              </li>
            </ul>
          </div>
        </article>
        <article className="card-dev">
          <h4 className="name">Mickaël Menet</h4>
          <div className="photo-profil photo-profil_mickael" />
          <p className="role">Lead dev front</p>
          <div>
            <ul className="socials">
              <li className="socials-links">
                <a href="https://www.linkedin.com/in/micka%C3%ABl-menet-716883215/" target="_blank" rel="noreferrer">
                  <FontAwesomeIcon icon={faLinkedin} className="fa-icon" />
                </a>
              </li>
              <li className="socials-links">
                <a href="https://github.com/mymistake59" target="_blank" rel="noreferrer">
                  <FontAwesomeIcon icon={faGithubSquare} className="fa-icon" />
                </a>
              </li>
              <li className="socials-links">
                <a href="https://twitter.com/mickaelmenet " target="_blank" rel="noreferrer">
                  <FontAwesomeIcon icon={faTwitterSquare} className="fa-icon" />
                </a>
              </li>
            </ul>
          </div>
        </article>
        <article className="card-dev">
          <h4 className="name">Yann Hirlemann</h4>
          <div className="photo-profil photo-profil_yann" />
          <p className="role">Dev front et Git master</p>
          <div>
            <ul className="socials">
              <li className="socials-links">
                <a href="https://github.com/Yannize" target="_blank" rel="noreferrer">
                  <FontAwesomeIcon icon={faGithubSquare} className="fa-icon" />
                </a>
              </li>
              <li className="socials-links">
                <a href="https://www.linkedin.com/in/yann-hirlemann-949422214/" target="_blank" rel="noreferrer">
                  <FontAwesomeIcon icon={faLinkedin} className="fa-icon" />
                </a>
              </li>
              <li className="socials-links">
                <a href="https://twitter.com/YannH52661719" target="_blank" rel="noreferrer">
                  <FontAwesomeIcon icon={faTwitterSquare} className="fa-icon" />
                </a>
              </li>
            </ul>
          </div>
        </article>
        <article className="card-dev">
          <h4 className="name">Julie Vandard</h4>
          <div className="photo-profil photo-profil_julie" />
          <p className="role">Dev front et Scrum master</p>
          <div>
            <ul className="socials">
              <li className="socials-links">
                <a href="https://www.linkedin.com/in/julie-vandard/" target="_blank" rel="noreferrer">
                  <FontAwesomeIcon icon={faLinkedin} className="fa-icon" />
                </a>
              </li>
              <li className="socials-links">
                <a href="https://github.com/juliedev-web" target="_blank" rel="noreferrer">
                  <FontAwesomeIcon icon={faGithubSquare} className="fa-icon" />
                </a>
              </li>
              <li className="socials-links">
                <a href="https://twitter.com/jvgazouille" target="_blank" rel="noreferrer">
                  <FontAwesomeIcon icon={faTwitterSquare} className="fa-icon" />
                </a>
              </li>
            </ul>
          </div>
        </article>
      </section>
    </div>
  );
}
