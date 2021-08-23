import React from 'react';
import { NavLink } from 'react-router-dom';

import PropTypes from 'prop-types';

import { formatDate } from '../../selectors/seeds';

import './styles.scss';

const List = ({ list }) => (
  <div className="list">
    {list.map((seed) => (
      <NavLink to={`/detail-graine/${seed.id}`} key={seed.id} className="card">
        <img src={seed.category_img} alt="img" />

        <div className="content">
          <div className="content__description">
            <p className="content__description__category">{seed.category_name}</p>
            <p className="content__description__variety">{seed.variety_name}</p>
          </div>
          <div className="content__infos">
            <p className="content__infos__pseudo">{seed.pseudo_user}</p>
            <p className="content__infos__date">{formatDate(seed)}</p>
          </div>
        </div>
      </NavLink>
    ))}
  </div>
);
List.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.object.isRequired,
  ).isRequired,
};

export default List;
