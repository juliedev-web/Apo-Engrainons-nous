import { connect } from 'react-redux';

import HeaderDesktop from 'src/components/Header/HeaderDesktop';

const mapStateToProps = (state) => ({
  isLogged: state.user.isLogged,
  pseudo: state.user.profil.pseudo,
});

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(HeaderDesktop);
