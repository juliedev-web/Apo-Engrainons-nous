import { connect } from 'react-redux';

import HeaderDesktop from 'src/components/Header/HeaderDesktop';

const mapStateToProps = (state) => ({
  isLogged: state.user.isLogged,
});

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(HeaderDesktop);
