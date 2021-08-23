import { connect } from 'react-redux';
import FormShareSeed from '../../components/PageShareSeed/FormShareSeed';

const mapStateToProps = (state) => ({
  isLogged: state.user.isLogged,
});

export default connect(mapStateToProps)(FormShareSeed);
