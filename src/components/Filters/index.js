import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

import CategoriesFilter from './CategoriesFilter';
import DepartmentFilter from './DepartmentFilter';
import SearchSeedInput from './SearchSeedInput';

const Filters = () => (
  <div className="filter">

    <div className="inputs-select">
      <CategoriesFilter />
      <DepartmentFilter />
    </div>

    <SearchSeedInput />

  </div>
);

Filters.propTypes = {

};

export default Filters;
