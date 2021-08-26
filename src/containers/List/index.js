import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import List from 'src/components/List';

const mapStateToProps = (state, ownProps) => ({
  list: state.seeds.list,
  totalSeedsNumber: state.seeds.totalSeedsNumber,
  pageNumber: ownProps.match.params.pageNumber || '1',
});

const mapDispatchToProps = (dispatch) => ({
  handlePageChange: (pageNumber) => {
    dispatch({ type: 'GET_LIST_PAGE', pageNumber });
  },
});

const container = connect(mapStateToProps, mapDispatchToProps)(List);

export default withRouter(container);
