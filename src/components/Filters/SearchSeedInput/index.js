import React from 'react';
import PropTypes from 'prop-types';

import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './styles.scss';

const SearchSeedInput = () => (
  <div className="search-seed-input">
    <input type="text" placeholder="Recherchez un nom de graine" />
    <FontAwesomeIcon icon={faSearch} size="lg" className="faSearch" />
  </div>
);

SearchSeedInput.propTypes = {

};

export default SearchSeedInput;
