import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import HomePage from 'src/components/HomePage';

const mapStateToProps = (state, ownProps) => ({
  list: state.seeds.list,
  pageNumber: ownProps.match.params.pageNumber || '1',
  categorySlug: ownProps.match.params.category,
  profil: state.user.profil,
  isLogged: state.user.isLogged,
  getFromList: state.seeds.getFromList,
});

const mapDispatchToProps = (dispatch) => ({
  getPage: (pageNumber, from, categorySlug) => {
    if (!categorySlug) {
      dispatch({ type: 'GET_LIST_PAGE', pageNumber: pageNumber, from });
    }
    else {
      dispatch({
        type: 'GET_CATEGORY_FILTERED', pageNumber, from, categoryId: categorySlug,
      });
    }
  },
});

const container = connect(mapStateToProps, mapDispatchToProps)(HomePage);

export default withRouter(container);
