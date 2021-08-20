import { connect } from 'react-redux';
import CategoriesFilter from 'src/components/Filters/CategoriesFilter';

const mapStateToProps = (state) => ({
  category: state.seeds.category,
  selectedValue: state.seeds.selectedValue,
  categoryName: state.seeds.categoryName,
});

const mapDispatchToProps = (dispatch) => ({
  getCategory: () => dispatch({ type: 'GETTING_CATEGORY' }),
  handleOptionClick: (categoryId) => {
    console.log(categoryId);
    dispatch({ type: 'GET_CATEGORY_FILTERED', categoryId });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(CategoriesFilter);
