import React from 'react';
import { NavLink } from 'react-router-dom';

import './styles.scss';

import PropTypes from 'prop-types';

const List = ({ list }) => (
  <div className="list">
    {list.map((seed) => {
      const date = new Date(seed.created_at);
      const year = date.getFullYear();
      let month = date.getMonth() + 1;
      let dt = date.getDate();

      if (dt < 10) {
        dt = `0${dt}`;
      }
      if (month < 10) {
        month = `0${month}`;
      }

      return (
        <NavLink to={`/detail-graine/${seed.id}`} key={seed.id} className="card">
          <img src={seed.img_url} alt="img" />

          <div className="content">
            <div className="content__description">
              <p className="content__description__category">{seed.category_name}</p>
              <p className="content__description__variety">{seed.variety_name}</p>
            </div>
            <div className="content__infos">
              <p className="content__infos__pseudo">{seed.pseudo_user}</p>
              <p className="content__infos__date">{`${dt}/${month}/${year}`}</p>
            </div>
          </div>
        </NavLink>
      );
    })}
  </div>
);

List.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.object.isRequired,
  ).isRequired,
};

export default List;
