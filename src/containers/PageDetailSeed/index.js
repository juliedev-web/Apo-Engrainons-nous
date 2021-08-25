import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import ComponentSeed from 'src/components/PageDetailSeed/ComponentSeed';

import { gettingOneSeed } from '../../actions/seeds';

// import { findSeed } from 'src/selectors/seeds';

const mapStateToProps = (state) => ({
  seed: state.seeds.seed,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  getOneSeed: () => dispatch(gettingOneSeed(ownProps.match.params.id)),
});

const container = connect(mapStateToProps, mapDispatchToProps)(ComponentSeed);

export default withRouter(container);
