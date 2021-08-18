import React from 'react';

import './styles.scss';

import PropTypes from 'prop-types';

const List = ({ list }) => (
  <div className="list">
    {list.map((seed) => (
      <div key={seed.id} className="card">
        <img src={seed.img_url} alt="img" />
        <div className="content">
          <div className="description">
            <h2>{seed.title}</h2>
            <h3>{seed.variety}</h3>
          </div>
          <h4>{seed.date}</h4>
        </div>
      </div>
    ))}
  </div>
);

List.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.object.isRequired,
  ).isRequired,
};

export default List;
