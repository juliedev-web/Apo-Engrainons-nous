import { connect } from 'react-redux';

import App from 'src/components/App';

const mapStateToProps = (state) => ({
  isLogged: state.user.isLogged,
  menuIsOpen: state.user.menuIsOpen,
});

const mapDispatchToProps = (dispatch) => ({
  checkToken: () => dispatch({ type: 'CHECK_TOKEN' }),
  getList: () => dispatch({ type: 'GETTING_LIST_PAGE' }),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
