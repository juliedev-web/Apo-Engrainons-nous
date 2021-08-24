import { connect } from 'react-redux';

import MenuModal from 'src/components/MenuModal';

const mapStateToProps = (state) => ({
  menuIsOpen: state.user.menuIsOpen,
});

const mapDispatchToProps = () => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(MenuModal);
