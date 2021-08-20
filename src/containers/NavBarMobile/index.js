import { connect } from 'react-redux';

import NavBarMobile from 'src/components/Footer/NavBarMobile';

const mapStateToProps = (state) => ({
  isLogged: state.user.isLogged,
});

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(NavBarMobile);
