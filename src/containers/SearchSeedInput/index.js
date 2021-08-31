// import
import { connect } from 'react-redux';
import SearchSeedInput from '../../components/Filters/SearchSeedInput';

const mapStateToProps = (state) => ({
  inputSearchValue: state.seeds.inputSearchValue,
});

const mapDispatchToProps = (dispatch) => ({
  handleInputSearchChange: (inputValue) => (dispatch({ type: 'SEARCH_CHANGE', inputValue })),

  handleSubmitSearch: (e) => {
    dispatch({ type: 'ON_SEARCH_SUBMIT' });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchSeedInput);
