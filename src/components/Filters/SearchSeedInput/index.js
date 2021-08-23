import React from 'react';
import PropTypes from 'prop-types';

import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './styles.scss';

const SearchSeedInput = ({ handleInputSearchChange, inputSearchValue, handleSubmitSearch }) => {
  const onSubmit = (e) => {
    handleSubmitSearch(e);
  };
  return (
    <div className="search-seed-input">
      <form onSubmit={onSubmit}>
        <input type="text" placeholder="Recherchez un nom de graine" value={inputSearchValue} onChange={(e) => handleInputSearchChange(e.target.value)} />
      </form>
      <FontAwesomeIcon icon={faSearch} size="lg" className="faSearch" />
    </div>
  );
};

SearchSeedInput.propTypes = {

};

export default SearchSeedInput;
