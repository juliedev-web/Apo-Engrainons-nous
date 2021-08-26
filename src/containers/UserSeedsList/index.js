import { connect } from 'react-redux';

import UserSeedsList from 'src/components/PageMySeeds/SeedsList';

const mapStateToProps = (state) => ({
  myList: state.user.myList,
});

const mapDispatchToProps = (dispatch) => ({
  getUserSeedsList: () => dispatch({ type: 'GET_USER_SEEDS_LIST' }),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserSeedsList);
