import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import HomePage from 'src/components/HomePage';

const mapStateToProps = (state, ownProps) => ({
  list: state.seeds.list,
  pageNumber: ownProps.match.params.pageNumber || '1',
  profil: state.user.profil,
  isLogged: state.user.isLogged,
});

const mapDispatchToProps = (dispatch) => ({
  getPage: (pageNumber, from) => {
    dispatch({ type: 'GET_LIST_PAGE', pageNumber: pageNumber, from });
  },
  loadList: () => {
    dispatch({ type: 'GET_LIST_WITH_JWT' });
  },
});

const container = connect(mapStateToProps, mapDispatchToProps)(HomePage);

export default withRouter(container);
