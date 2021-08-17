import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

import CategoriesFilter from './CategoriesFilter';
import SearchSeedInput from './SearchSeedInput';

const Filters = () => (
  <div className="filter">
    <CategoriesFilter />
    <SearchSeedInput />
  </div>
);

Filters.propTypes = {

};

export default Filters;
