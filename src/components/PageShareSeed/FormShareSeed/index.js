import React from 'react';
import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';

import CategoriesFilter from 'src/containers/CategoriesFilter';

import './styles.scss';

import adviceData from 'src/data/conseils';
import detailData from 'src/data/detail';

const FormShareSeed = ({
  isLogged, varietyInputValue, handleInputValue, textAreaDetailValue, textAreaAdviceValue, handleOnSubmit,
}) => (
  <div className="form-seed">
    <h2>Partagez vos graines</h2>
    <form onSubmit={handleOnSubmit}>
      <div className="fields-zone">
        <CategoriesFilter />
        <input className="input" placeholder="Nom de la variété" value={varietyInputValue} onChange={(e) => handleInputValue(e.target.value, 'varietyInputValue')} type="text" name="seed_name" />
        <textarea className="description" placeholder={detailData} name="description" cols="100" rows="20" value={textAreaDetailValue} onChange={(e) => handleInputValue(e.target.value, 'textAreaDetailValue')} />
        <textarea className="conseil" placeholder={adviceData} name="advice" cols="100" rows="20" value={textAreaAdviceValue} onChange={(e) => handleInputValue(e.target.value, 'textAreaAdviceValue')} />
      </div>
      {isLogged ? (
        <button type="submit">Valider</button>
      ) : (
        <Link className="link-to-connexion" to="/connexion">
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
