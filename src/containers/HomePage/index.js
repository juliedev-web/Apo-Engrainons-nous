import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import HomePage from 'src/components/HomePage';

const mapStateToProps = (state, ownProps) => ({
  list: state.seeds.list,
  pageNumber: ownProps.match.params.pageNumber || '1',
});

const mapDispatchToProps = (dispatch) => ({
  getPage: (pageNumber) => {
    dispatch({ type: 'GET_LIST_PAGE', pageNumber: pageNumber });
  },
});

const container = connect(mapStateToProps, mapDispatchToProps)(HomePage);

export default withRouter(container);
