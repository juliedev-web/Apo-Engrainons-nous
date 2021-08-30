import { connect } from 'react-redux';
import CategoriesFilter from 'src/components/Filters/CategoriesFilter';

const mapStateToProps = (state) => ({
  category: state.seeds.category,
  idCategory: state.seeds.selectedCategoryIdFilter,
  idNewSeedSelect: state.seeds.selectedNewSeedCategory,
});

const mapDispatchToProps = (dispatch) => ({
  getCategory: () => dispatch({ type: 'GETTING_CATEGORY' }),
  handleOptionClick: (categoryId, from) => {
    if (from === 'homePage') {
      dispatch({ type: 'GET_CATEGORY_FILTERED', categoryId });
    }
    if (from === 'sharedSeedPage') {
      console.log('partage de graine');
      dispatch({ type: 'SELECT_CATEGORY_ID', categoryId });
    }
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(CategoriesFilter);
