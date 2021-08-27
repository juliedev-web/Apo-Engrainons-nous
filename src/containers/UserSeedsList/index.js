import { connect } from 'react-redux';

import UserSeedsList from 'src/components/PageMySeeds/SeedsList';

const mapStateToProps = (state) => ({
  myList: state.user.myList,
});

const mapDispatchToProps = (dispatch) => ({
  getUserSeedsList: () => dispatch({ type: 'GET_USER_SEEDS_LIST' }),
  handleDeleteSeedClick: (seedId) => {
    dispatch({ type: 'ON_DELETE_SEED_CLICK', seedId });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(UserSeedsList);
