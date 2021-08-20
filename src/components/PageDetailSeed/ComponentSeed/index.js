import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

import seed from 'src/data/seed';

const ComponentSeed = ({
  category,
  variety,
  conseil,
  description,
}) => (
  <div className="container-seed">
    <div className="top">
      <div className="imgCat">
        <img src="" alt="legume" />
      </div>
      <div className="descriptionVariety">
        <h2>Catégorie : </h2>
        <p>{category}</p>
        <h2>Nom de la variété : </h2>
        <p>{variety}</p>
        <h2>Description : </h2>
        <p>
          {description}
        </p>
        <h2>Conseils :</h2>
        <p>
          {conseil}
        </p>
      </div>
    </div>
    <button type="button">Contacter le propriétaire</button>
  </div>
);

ComponentSeed.propTypes = {
  category: PropTypes.string.isRequired,
  variety: PropTypes.string.isRequired,
  conseil: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default ComponentSeed;
