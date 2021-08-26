import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import ComponentSeed from 'src/components/PageDetailSeed/ComponentSeed';

import {
  gettingOneSeed,
  toggleMail,
} from '../../actions/seeds';

// import { findSeed } from 'src/selectors/seeds';

const mapStateToProps = (state) => ({
  seed: state.seeds.seed,
  showMail: state.seeds.showMail,
  isLogged: state.user.isLogged,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  getOneSeed: () => dispatch(gettingOneSeed(ownProps.match.params.id)),

  toggleMail: () => {
    dispatch(toggleMail());
  },
});
const container = connect(mapStateToProps, mapDispatchToProps)(ComponentSeed);

export default withRouter(container);
