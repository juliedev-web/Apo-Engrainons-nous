import { connect } from 'react-redux';

import App from 'src/components/App';

const mapStateToProps = (state) => ({
  isLogged: state.user.isLogged,

});

const mapDispatchToProps = (dispatch) => ({
  getList: () => dispatch({ type: 'GETTING_LIST' }),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
