import React from 'react';

import './styles.scss';

import PropTypes from 'prop-types';

const List = ({ list }) => (
  <div className="list">
    {list.map((seed) => (
      <div className="card">
        <img src={seed.img_url} alt="img" />
        <div className="content">
          <h2>{seed.title}</h2>
          <h3>{seed.variety}</h3>
          <h4>{seed.date}</h4>
        </div>
      </div>
    ))}
  </div>
);

List.propTypes = {
  list: PropTypes.array.isRequired,
};

export default List;
