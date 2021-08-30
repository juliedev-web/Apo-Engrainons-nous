import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import List from 'src/components/List';

const mapStateToProps = (state, ownProps) => ({
  list: state.seeds.list,
  totalSeedsNumber: state.seeds.totalSeedsNumber,
  pageNumber: ownProps.match.params.pageNumber || '1',
  getFromList: state.seeds.getFromList,
  categoryId: state.seeds.selectedCategoryIdFilter,
});

const mapDispatchToProps = (dispatch) => ({
  handlePageChange: (pageNumber, getFromList, categoryId) => {
    if (getFromList === 'fullList') {
      dispatch({ type: 'GET_LIST_PAGE', pageNumber });
    }
    if (getFromList === 'byCategoryList') {
      dispatch({ type: 'GET_CATEGORY_FILTERED', pageNumber, categoryId });
    }
  },
});

const container = connect(mapStateToProps, mapDispatchToProps)(List);

export default withRouter(container);
