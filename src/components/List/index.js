import React, { useEffect } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

import ReactPaginate from 'react-paginate';
import { formatDate } from '../../selectors/seeds';

import './styles.scss';

const List = ({
  list,
  totalSeedsNumber,
  handlePageChange,
  pageNumber,
  getFromList,
  categoryId,
  inputSearchValue,
}) => {
  const history = useHistory();
  const seedPerPage = 12;
  const pageCount = Math.ceil(totalSeedsNumber / seedPerPage);

  return (
    <div className="listContainer">
      <div className="list">
        {
          list.map((seed) => (
            <NavLink to={`/detail-graine/${seed.id}`} key={seed.id} className="card">
              <img src={seed.category_img} alt="img" />
              <div className="content">
                <div className="content__description">
                  <p className="content__description__category">{seed.category_name}</p>
                  <p className="content__description__variety">{seed.variety_name}</p>
                </div>
                <div className="content__infos">
                  <p className="content__infos__pseudo">{seed.pseudo_user}</p>
                  <p className="content__infos__date">{formatDate(seed.created_at)}</p>
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
          if (getFromList === 'fullList') {
            history.push(`/page/${selected.selected + 1}`);
            handlePageChange(selected.selected, getFromList);
          }
          if (getFromList === 'byCategoryList') {
            history.push(`/categorie/${categoryId}/page/${selected.selected + 1}`);
            handlePageChange(selected.selected, getFromList, categoryId);
          }
          if (getFromList === 'byVarietyList') {
            history.push(`/search/${inputSearchValue}/page/${selected.selected + 1}`);
            handlePageChange(selected.selected, getFromList, inputSearchValue);
          }
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
  getFromList: PropTypes.string.isRequired,
  categoryId: PropTypes.string.isRequired,
};

export default List;
