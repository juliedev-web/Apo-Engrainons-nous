import React from 'react';
import PropTypes from 'prop-types';

import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './styles.scss';

const DepartmentFilter = () => (
  <div className="department-filter">
    <select name="" id="department">
      <option value="">Département</option>
    </select>
    <FontAwesomeIcon icon={faMapMarkerAlt} size="xs" className="faMapMarkerAlt" />
  </div>
);

DepartmentFilter.propTypes = {

};

export default DepartmentFilter;
