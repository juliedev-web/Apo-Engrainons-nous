import { connect } from 'react-redux';
import CategoriesFilter from 'src/components/Filters/CategoriesFilter';

const mapStateToProps = (state) => ({
  category: state.seeds.category,
});

const mapDispatchToProps = (dispatch) => ({
  getCategory: () => dispatch({ type: 'GETTING_CATEGORY' }),
});

export default connect(mapStateToProps, mapDispatchToProps)(CategoriesFilter);
