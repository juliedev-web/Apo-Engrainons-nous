import React from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './styles.scss';

const SearchSeedInput = ({
  handleInputSearchChange, inputSearchValue, handleSubmitSearch,
}) => {
  const history = useHistory();
  const onSubmit = (e) => {
    e.preventDefault();
    history.push(`/search/${inputSearchValue}/page/1`);
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
  handleInputSearchChange: PropTypes.func.isRequired,
  inputSearchValue: PropTypes.string.isRequired,
  handleSubmitSearch: PropTypes.func.isRequired,
};

export default SearchSeedInput;
