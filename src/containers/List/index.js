import { connect } from 'react-redux';

import List from 'src/components/List';

const mapStateToProps = (state) => ({
  list: state.seeds.list,
  totalSeedsNumber: state.seeds.totalSeedsNumber,
});

const mapDispatchToProps = (dispatch) => ({
  handlePageChange: (pageNumber) => {
    dispatch({ type: 'GET_LIST_PAGE', pageNumber });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(List);
