import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import ComponentSeed from 'src/components/PageDetailSeed/ComponentSeed';

import {
  gettingOneSeed,
  toggleMail,
  hideMailAction,
  toggleEditSeed,
} from '../../actions/seeds';

// import { findSeed } from 'src/selectors/seeds';

const mapStateToProps = (state) => ({
  seed: state.seeds.seed,
  showMail: state.seeds.showMail,
  isLogged: state.user.isLogged,
  editSeed: state.seeds.editSeed,
  userId: +state.user.profil.id,
  myPseudo: state.user.profil.pseudo,
  yourPseudo: state.user.profil.yourPseudo,
  copyMailToClipBoardMsg: state.seeds.copyMailToClipBoardMsg,

});

const mapDispatchToProps = (dispatch, ownProps) => ({
  getOneSeed: () => dispatch(gettingOneSeed(ownProps.match.params.id)),

  toggleMail: () => {
    dispatch(toggleMail());
  },

  hideMail: () => dispatch(hideMailAction()),

  toggleEditSeed: () => {
    dispatch({ type: 'ON_TOGGLE_EDIT_SEED' });
  },

  contact: () => dispatch({ type: 'CONTACT' }),

  copytoClipBoard: () => dispatch({ type: 'EMAIL_COPY_TO_CLIPBOARD' }),

  clearMessageCopy: () => {
    dispatch({ type: 'CLEAR_MSG_COPIED' });
  },
});
const container = connect(mapStateToProps, mapDispatchToProps)(ComponentSeed);

export default withRouter(container);
