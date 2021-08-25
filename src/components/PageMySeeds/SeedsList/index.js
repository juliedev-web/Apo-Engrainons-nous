import React from 'react';
import { NavLink } from 'react-router-dom';

import './styles.scss';


export default function Seedslist() {
  return (
    <div className="seeds-container">
      <h2>Mes graines</h2>
      <section className="seeds-list">
        <ul className="list list-menu">
          <li className="list-menu_item">Catégorie</li>
          <li className="list-menu_item">Variété</li>
        </ul>
        <ul className="detail-list">
          <li className="detail-list_item detail-category">
            <NavLink
              className="seed-category"
              to="/detail-graine/1"
              exact
              activeClassName="seed-category--active"
            >
              Courgette
            </NavLink>
          </li>
          <li className="detail-list_item detail-variety">
            <NavLink
              className="seed-variety"
              to="/detail-graine/1"
              exact
              activeClassName="seed-category--active"
            >
              de Laval
            </NavLink>
          </li>
        </ul>
      </section>
    </div>
  );
}
