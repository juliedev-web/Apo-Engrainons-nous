import { connect } from 'react-redux';

import App from 'src/components/App';

const mapStateToProps = (state) => ({
  isLogged: state.user.isLogged,
  menuIsOpen: state.user.menuIsOpen,
});

const mapDispatchToProps = (dispatch) => ({
  getList: () => dispatch({ type: 'GETTING_LIST' }),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
