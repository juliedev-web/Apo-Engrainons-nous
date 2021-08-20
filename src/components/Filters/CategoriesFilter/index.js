import React, { useEffect } from 'react';

// FontAwesome
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import PropTypes from 'prop-types';

import './styles.scss';

const CategoriesFilter = ({ category, getCategory }) => {
  console.log(getCategory);
  useEffect(() => {
    getCategory();
  }, []);
  return (
    <div className="categories-filter">
      <select name="" id="department">
        <option value="">
          Catégories
        </option>
      </select>
      <FontAwesomeIcon icon={faBars} size="lg" className="faBars" />
    </div>
  );
};

CategoriesFilter.propTypes = {

};

export default CategoriesFilter;
