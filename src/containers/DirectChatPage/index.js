import { connect } from 'react-redux';
import DirectChatPage from 'src/components/DirectChatPage';

const mapStateToProps = (state) => ({
  userName: state.user.profil.pseudo,
});

// const mapDispatchToProps = (dispatch) => ({
// });

export default connect(mapStateToProps)(DirectChatPage);
