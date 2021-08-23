import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import ReactPaginate from 'react-paginate';
import { formatDate } from '../../selectors/seeds';

import './styles.scss';

const List = ({ list }) => {
  const [pageNumber, setPageNumber] = useState(0);
  const seedPerPage = 12;
  const pagesVisited = pageNumber * seedPerPage;
  const displaySeeds = list
    .slice(pagesVisited, pagesVisited + seedPerPage)
    .map((l) => (
      <NavLink to={`/detail-graine/${l.id}`} key={l.id} className="card">
        <img src={l.category_img} alt="img" />
        <div className="content">
          <div className="content__description">
            <p className="content__description__category">{l.category_name}</p>
            <p className="content__description__variety">{l.variety_name}</p>
          </div>
          <div className="content__infos">
            <p className="content__infos__pseudo">{l.pseudo_user}</p>
            <p className="content__infos__date">{formatDate(l)}</p>
          </div>
        </div>
      </NavLink>
    ));
  const pageCount = Math.ceil(list.length / seedPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  return (
    <div className="listContainer">
      <div className="list">
        {displaySeeds}
      </div>
      <ReactPaginate
        marginPagesDisplayed={2}
        pageRangeDisplayed={1}
        previousLabel="<"
        nextLabel=">"
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName="paginationBttns"
        previousLinkClassName="previousBttn"
        nextLinkClassName="nextBttn"
        disabledClassName="paginationDisabled"
        activeClassName="paginationActive"
      />
    </div>
  );
};
List.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.object.isRequired,
  ).isRequired,
};

export default List;
