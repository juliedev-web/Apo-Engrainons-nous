import React from 'react';

import './styles.scss';

import Cedric from 'src/assets/image/Cedric.jpg';
import monaliyann from 'src/assets/image/monaliyann.PNG';
import Mika from 'src/assets/image/mika.PNG';
import Kevin from 'src/assets/image/Kevin.PNG';
import Github from 'src/assets/image/github.png';
import LinkedIn from 'src/assets/image/linkedIn.png';
import Twitter from 'src/assets/image/twitter.png';

export default function TeamCards() {
  return (
    <div className="container">
      <h2 className="team-title">L'équipe d'Engrainons-nous</h2>
      <section className="card-container">
        <article className="card-dev">
          <h3 className="name">Cédric Cubat</h3>
          <img className="photo-profil" src={Cedric} alt="Cedric" />
          <p className="role">Product Owner et Lead dev back</p>
          <div>
            <ul className="socials">
              <li className="socials-links">
                <a href="https://github.com/CedricCT" target="blank">
                  <img className="socials-img socials-img_github" src={Github} alt="logo Github" />
                </a>
              </li>
              <li className="socials-links">
                <a href="https://www.linkedin.com/in/cedriccubat/ " target="blank">
                  <img className="socials-img socials-img_linkedIn" src={LinkedIn} alt="logo LinkedIn" />
                </a>
              </li>
              <li className="socials-links">
                <a href="https://twitter.com/Cedric_Arkyun" target="blank">
                  <img className="socials-img socials-img_twitter" src={Twitter} alt="logo Twitter" />
                </a>
              </li>
            </ul>
          </div>
        </article>
        <article className="card-dev">
          <h3 className="name">Kévin Girault</h3>
          <img className="photo-profil" src={Kevin} alt="Kevin" />
          <p className="role">Dev back et référent technique</p>
          <div>
            <ul className="socials">
              <li className="socials-links">
                <a href="#" target="blank">
                  <img className="socials-img socials-img_github" src={Github} alt="logo Github" />
                </a>
              </li>
              <li className="socials-links">
                <a href="# " target="blank">
                  <img className="socials-img socials-img_linkedIn" src={LinkedIn} alt="logo LinkedIn" />
                </a>
              </li>
              <li className="socials-links">
                <a href="#" target="blank">
                  <img className="socials-img socials-img_twitter" src={Twitter} alt="logo Twitter" />
                </a>
              </li>
            </ul>
          </div>
        </article>
        <article className="card-dev">
          <h3 className="name">Mickaël Menet</h3>
          <img className="photo-profil" src={Mika} alt="Mika" />
          <p className="role">Lead dev front</p>
          <div>
            <ul className="socials">
              <li className="socials-links">
                <a href="https://github.com/mymistake59" target="blank">
                  <img className="socials-img socials-img_github" src={Github} alt="logo Github" />
                </a>
              </li>
              <li className="socials-links">
                <a href="https://www.linkedin.com/in/micka%C3%ABl-menet-716883215/" target="blank">
                  <img className="socials-img socials-img_linkedIn" src={LinkedIn} alt="logo LinkedIn" />
                </a>
              </li>
              <li className="socials-links">
                <a href="https://twitter.com/mickaelmenet " target="blank">
                  <img className="socials-img socials-img_twitter" src={Twitter} alt="logo Twitter" />
                </a>
              </li>
            </ul>
          </div>
        </article>
        <article className="card-dev">
          <h3 className="name">Yann Hirlemann</h3>
          <img className="photo-profil" src={monaliyann} alt="monaliyann" />
          <p className="role">Dev front et Git master</p>
          <div>
            <ul className="socials">
              <li className="socials-links">
                <a href="#" target="blank">
                  <img className="socials-img socials-img_github" src={Github} alt="logo Github" />
                </a>
              </li>
              <li className="socials-links">
                <a href="#" target="blank">
                  <img className="socials-img socials-img_linkedIn" src={LinkedIn} alt="logo LinkedIn" />
                </a>
              </li>
              <li className="socials-links">
                <a href="#" target="blank">
                  <img className="socials-img socials-img_twitter" src={Twitter} alt="logo Twitter" />
                </a>
              </li>
            </ul>
          </div>
        </article>
        <article className="card-dev">
          <h3 className="name">Julie Vandard</h3>
          <img className="photo-profil" src={Cedric} alt="Cedric" />
          <p className="role">Dev front et Scrum master</p>
          <div>
            <ul className="socials">
              <li className="socials-links">
                <a href="https://github.com/juliedev-web" target="blank">
                  <img className="socials-img socials-img_github" src={Github} alt="logo Github" />
                </a>
              </li>
              <li className="socials-links">
                <a href="https://www.linkedin.com/in/julie-vandard/" target="blank">
                  <img className="socials-img socials-img_linkedIn" src={LinkedIn} alt="logo LinkedIn" />
                </a>
              </li>
              <li className="socials-links">
                <a href="https://twitter.com/jvgazouille" target="blank">
                  <img className="socials-img socials-img_twitter" src={Twitter} alt="logo Twitter" />
                </a>
              </li>
            </ul>
          </div>
        </article>
      </section>
    </div>
  );
}
