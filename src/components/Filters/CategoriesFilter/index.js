// == Import npm
import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import './styles.scss';

// == Component
const CategoriesFilter = ({
  category,
  getCategory,
  handleOptionClick,
  idCategory,
  idNewSeedSelect,
  from,
  categorySeedValueEdit,

}) => {
  const history = useHistory();

  useEffect(() => {
    getCategory();
  }, []);
  console.log(from);
  return (
    <div className="categories-filter">
      <select
        name="category"
        id="categories"
        value={from === 'sharedSeedPage' ? idNewSeedSelect : categorySeedValueEdit}
        onChange={(e) => {
          if (from === 'homePage') {
            history.push(`/categorie/${e.target.value}/page/1`);
          }

          handleOptionClick(e.target.value, from);
        }}
      >
        <option value="categories">Catégories</option>
        {category.map((cat) => (
          <option value={cat.id} key={cat.id}>
            {cat.name}
          </option>
        ))}
      </select>
      <FontAwesomeIcon icon={faBars} size="lg" className="faBars" />
    </div>
  );
};

// == Props validation
CategoriesFilter.propTypes = {
  idNewSeedSelect: PropTypes.string.isRequired,
  category: PropTypes.array.isRequired,
  getCategory: PropTypes.func.isRequired,
  from: PropTypes.string.isRequired,
  handleOptionClick: PropTypes.func.isRequired,
  idCategory: PropTypes.string.isRequired,
};

export default CategoriesFilter;
