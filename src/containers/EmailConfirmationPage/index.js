import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import EmailConfirmationPage from 'src/components/EmailConfirmationPage';

const mapStateToProps = (state) => ({
  emailConfirmMsg: state.user.emailConfirmMsg,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  checkConfirmEmail: (pseudo) => {
    dispatch({ type: 'CHECK_CONFIRM_EMAIL', payload: ownProps.match.params, pseudo });
  },
});

const container = connect(mapStateToProps, mapDispatchToProps)(EmailConfirmationPage);

export default withRouter(container);
