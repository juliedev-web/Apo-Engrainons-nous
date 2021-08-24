import { connect } from 'react-redux';

import MenuModal from 'src/components/MenuModal';

const mapStateToProps = (state) => ({
  menuIsOpen: state.user.menuIsOpen,
});

const mapDispatchToProps = (dispatch) => ({
  closeModal: () => dispatch({ type: 'CLOSE_MODAL' }),
});

export default connect(mapStateToProps, mapDispatchToProps)(MenuModal);
