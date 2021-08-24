import React from 'react';
import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';

import CategoriesFilter from 'src/containers/CategoriesFilter';

import './styles.scss';

import adviceData from 'src/data/conseils';
import detailData from 'src/data/detail';

const FormShareSeed = ({ isLogged }) => (
  <div className="form-seed">
    <h2>Partagez vos graines</h2>
    <form action="#">
      <div className="fields-zone">
        <CategoriesFilter />
        <input className="input" placeholder="Nom de la variété" type="text" name="seed_name" />
        <textarea className="description" placeholder={detailData} name="description" cols="100" rows="20" />
        <textarea className="conseil" placeholder={adviceData} name="advice" cols="100" rows="20" />
      </div>
      {isLogged ? (
        <button type="button">Valider</button>
      ) : (
        <Link graink className="link-to-connexion" to="/connexion">
          pour partager nes
          <span>se connecter</span>
        </Link>
      )}
    </form>
    <div className="fake-footer" />
  </div>
);

FormShareSeed.propTypes = {
  isLogged: PropTypes.bool.isRequired,
};

export default FormShareSeed;
