import { connect } from 'react-redux';

import UserSeedsList from 'src/components/PageMySeeds/SeedsList';

import {
  toggleEditSeed,
} from 'src/actions/seeds';

const mapStateToProps = (state) => ({
  myList: state.user.myList,
  confirmDeleteSeedMsg: state.seeds.confirmDeleteSeedMsg,
  toBeDeletedSeedId: state.seeds.toBeDeletedSeedId,
});

const mapDispatchToProps = (dispatch) => ({
  getUserSeedsList: () => dispatch({ type: 'GET_USER_SEEDS_LIST' }),
  handleDeleteSeedClickConfirm: (seedId) => {
    dispatch({ type: 'ON_DELETE_SEED_CLICK_CONFIRM', seedId });
  },
  handleDeleteSeedClick: (seedId) => {
    dispatch({ type: 'ON_DELETE_SEED_CLICK', seedId });
  },
  closeDeleteConfirmButton: () => {
    dispatch({ type: 'ON_ClOSE_DELETE_CONFIRM_BUTTON' });
  },
  toggleEditSeed: () => {
    dispatch(toggleEditSeed());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(UserSeedsList);
