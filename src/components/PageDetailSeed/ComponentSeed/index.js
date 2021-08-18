import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import './styles.scss';

import seed from 'src/data/seed';

const ComponentSeed = () => {
  console.log('toto');
  return (
    <div className="container-seed">
      <div className="imgCat">
        <img src={seed.img_url} alt={seed.category_name} />
        <div>
          <h2>Catégorie : </h2>
          <p>{seed.category_name}</p>
          <h2>Nom de la variété : </h2>
          <p> {seed.variety_name}</p>
        </div>
      </div>
      <div className="description">
        <h2>Description : </h2>
        <p>
          {seed.description}
        </p>
      </div>
      <div className="conseils">
        <h2>Conseils :</h2>
        <p>
          {seed.conseil}
        </p>
      </div>
      <button type="button">Contacter le propriètaire</button>
    </div>
  );
};

ComponentSeed.propTypes = {

};

export default ComponentSeed;
