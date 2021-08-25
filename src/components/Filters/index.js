import React from 'react';

import './styles.scss';

import CategoriesFilter from '../../containers/CategoriesFilter';
import SearchSeedInput from '../../containers/SearchSeedInput';

const Filters = () => (
  <div className="filter">
    <CategoriesFilter from="homePage" />
    <SearchSeedInput />
  </div>
);

export default Filters;
