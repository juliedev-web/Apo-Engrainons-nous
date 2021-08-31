import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import HomePage from 'src/components/HomePage';

const mapStateToProps = (state, ownProps) => ({
  list: state.seeds.list,
  pageNumber: ownProps.match.params.pageNumber || '1',
  slug: ownProps.match.params.slug,
  filterSlug: ownProps.match.params.filter,
  profil: state.user.profil,
  isLogged: state.user.isLogged,
  getFromList: state.seeds.getFromList,
});

const mapDispatchToProps = (dispatch) => ({
  getPage: (pageNumber, from, slug, filter) => {
    console.log(slug);
    if (!slug) {
      dispatch({ type: 'GET_LIST_PAGE', pageNumber: pageNumber, from });
    }
    if (filter === 'byCategoryList') {
      dispatch({
        type: 'GET_CATEGORY_FILTERED', pageNumber, from, categoryId: slug,
      });
    }
    if (filter === 'byVarietyList') {
      dispatch({ type: 'ON_SEARCH_SUBMIT', pageNumber, slug });
    }
  },
});

const container = connect(mapStateToProps, mapDispatchToProps)(HomePage);

export default withRouter(container);
