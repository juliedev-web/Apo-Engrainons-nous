import React from 'react';

import './styles.scss';

export default function Seedslist() {
  return (
    <div className="seeds-container">
      <h2>Mes graines</h2>
      <section className="seeds-list">
        <ul className="list-menu">
          <li className="item-menu">Catégorie</li>
          <li className="item-menu">Variété</li>
          <li className="item-menu">Date</li>
        </ul>
      </section>
    </div>
  );
}
