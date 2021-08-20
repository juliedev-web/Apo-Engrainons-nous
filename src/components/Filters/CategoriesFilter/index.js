import React, { useEffect } from 'react';

// FontAwesome
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import PropTypes from 'prop-types';

import './styles.scss';

const CategoriesFilter = ({
  category, getCategory, handleOptionClick, selectedValue, categoryName,
}) => {
  useEffect(() => {
    getCategory();
  }, []);
  console.log('toto', category);
  return (
    <div className="categories-filter">
      <select name="" id="categories" value={selectedValue} onChange={(e) => handleOptionClick(e.target.value)}>
        <option value="">{categoryName}</option>
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

CategoriesFilter.propTypes = {

};

export default CategoriesFilter;
