import { connect } from 'react-redux';

import Filters from 'src/components/Filters';

// const mapStateToProps = (state) => ({
// selectedCategoryIdFilter: state.seeds.selectedCategoryIdFilter,
// inputSearchValue: state.seeds.inputSearchValue,
// toto: 'toto',
// });

const mapDispatchToProps = (dispatch) => ({
  handleClickResetFilter: () => {
    dispatch({ type: 'ON_CLICK_RESET_FILTER' });
    dispatch({ type: 'GET_LIST_PAGE', pageNumber: '0' });
  },
});

export default connect(null, mapDispatchToProps)(Filters);
