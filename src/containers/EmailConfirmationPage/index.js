import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import EmailConfirmationPage from 'src/components/EmailConfirmationPage';

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch, ownProps) => ({
  checkConfirmEmail: () => {
    console.log(ownProps.match.params);

    dispatch({ type: 'CHECK_CONFIRM_EMAIL', payload: ownProps.match.params });
  },
});

const container = connect(mapStateToProps, mapDispatchToProps)(EmailConfirmationPage);

export default withRouter(container);
