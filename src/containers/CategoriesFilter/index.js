import { connect } from 'react-redux';
import CategoriesFilter from 'src/components/Filters/CategoriesFilter';

const mapStateToProps = (state) => ({
  category: state.seeds.category,
});

const mapDispatchToProps = (dispatch) => ({
  getCategory: () => dispatch({ type: 'GETTING_CATEGORY' }),
  handleOptionClick: (categoryId, selectedFrom) => {
    if (selectedFrom === 'homePage') {
      dispatch({ type: 'GET_CATEGORY_FILTERED', categoryId });
    }
    if (selectedFrom === 'sharedSeedPage') {
      dispatch({ type: 'SELECT_CATEGORY_ID', categoryId });
    }
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(CategoriesFilter);
