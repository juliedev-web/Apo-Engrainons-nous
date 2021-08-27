import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

import ReactPaginate from 'react-paginate';
import { formatDate } from '../../selectors/seeds';

import './styles.scss';

const List = ({
  list, totalSeedsNumber, handlePageChange, pageNumber,
}) => {
  const history = useHistory();
  const seedPerPage = 12;
  const pageCount = Math.ceil(totalSeedsNumber / seedPerPage);

  return (
    <div className="listContainer">
      <div className="list">
        {
          list.map((l) => (
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
          ))
        }
      </div>
      <ReactPaginate
        marginPagesDisplayed={2}
        pageRangeDisplayed={1}
        previousLabel="<"
        nextLabel=">"
        pageCount={pageCount}
        onPageChange={(selected) => {
          // history.push(`/page/${selected.selected + 1}`);
          handlePageChange(selected.selected);
        }}
        containerClassName="paginationBttns"
        previousLinkClassName="previousBttn"
        nextLinkClassName="nextBttn"
        disabledClassName="paginationDisabled"
        activeClassName="paginationActive"
        initialPage={+pageNumber - 1}
      />
    </div>
  );
};
List.propTypes = {
  handlePageChange: PropTypes.func.isRequired,
  totalSeedsNumber: PropTypes.number.isRequired,
  list: PropTypes.arrayOf(
    PropTypes.object.isRequired,
  ).isRequired,
  pageNumber: PropTypes.string.isRequired,
};

export default List;
