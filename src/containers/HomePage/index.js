import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import HomePage from 'src/components/HomePage';

const mapStateToProps = (state) => ({
  list: state.seeds.list,
  pageNumber: state.seeds.pageNumber,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  getPage: (pageNumber) => {
    dispatch({ type: 'GET_LIST_PAGE', pageNumber: pageNumber || ownProps.match.params.pageNumber });
  },
});

const container = connect(mapStateToProps, mapDispatchToProps)(HomePage);

export default withRouter(container);
