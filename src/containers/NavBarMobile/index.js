import { connect } from 'react-redux';

import NavBarMobile from 'src/components/Footer/NavBarMobile';

const mapStateToProps = (state) => ({
  isLogged: state.user.isLogged,
  menuIsOpen: state.user.menuIsOpen,
  newMessageCounter: state.user.profil.newMessageCounter,
});

const mapDispatchToProps = (dispatch) => ({
  handleMenuIsOpenClick: () => dispatch({ type: 'ON_MENU_CLICK' }),
  closeModal: () => dispatch({ type: 'CLOSE_MODAL' }),
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBarMobile);
