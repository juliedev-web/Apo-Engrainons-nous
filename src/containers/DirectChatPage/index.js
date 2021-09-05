import { connect } from 'react-redux';
import DirectChatPage from 'src/components/DirectChatPage';

const mapStateToProps = (state) => ({
  userName: state.user.profil.pseudo,
});

const mapDispatchToProps = (dispatch) => ({
  receivedNewMessage: (from) => {
    console.log(from);
    if (!from) {
      dispatch({ type: 'ON_RECEIVED_NEW_MESSAGE' });
    }
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(DirectChatPage);
