import { connect } from 'react-redux';

import Tchat from 'src/components/Tchat';

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({
  emptyNewMessageCounter: () => {
    dispatch({ type: 'EMPTY_NEW_MESSAGE_COUNTER' });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Tchat);
