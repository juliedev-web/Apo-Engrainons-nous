import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

import CategoriesFilter from '../../containers/CategoriesFilter';
import SearchSeedInput from '../../containers/SearchSeedInput';

const Filters = ({ handleClickResetFilter }) => (
  <div className="filter">
    <div className="filterComponent">
      <CategoriesFilter from="homePage" />
      <SearchSeedInput />
    </div>
    <p
      className="linkReset"
      onClick={() => {
        handleClickResetFilter();
      }}
    >Effacer les filtres
    </p>
  </div>
);

Filters.propTypes = {
  handleClickResetFilter: PropTypes.func.isRequired,
};
export default Filters;
