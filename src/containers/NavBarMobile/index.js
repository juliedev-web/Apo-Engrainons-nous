import { connect } from 'react-redux';

import NavBarMobile from 'src/components/Footer/NavBarMobile';

const mapStateToProps = (state) => ({
  isLogged: state.user.isLogged,
  menuIsOpen: state.user.menuIsOpen,
});

const mapDispatchToProps = (dispatch) => ({
  handleMenuIsOpenClick: () => dispatch({ type: 'ON_MENU_CLICK' }),
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBarMobile);
