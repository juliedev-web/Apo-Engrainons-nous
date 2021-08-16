import React from 'react';

// FontAwesome
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import PropTypes from 'prop-types';

import './styles.scss';

const CategoriesFilter = () => (
  <div className="categories-filter">
    <select name="" id="department">
      <option value="">
        Catégories
      </option>
    </select>
    <FontAwesomeIcon icon={faBars} size="xs" className="faBars" />
  </div>
);

CategoriesFilter.propTypes = {

};

export default CategoriesFilter;
