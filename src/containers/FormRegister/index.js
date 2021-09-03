import { connect } from 'react-redux';

import FormRegister from 'src/components/PageRegister/FormRegister';

import {
  createChangePseudoInputValueAction,
  createSubmitSigninAction,
} from 'src/actions/user';

const mapStateToProps = (state) => ({
  pseudoInputValue: state.user.pseudoInputValue,
  emailInputValue: state.user.emailInputValue,
  cityInputValue: state.user.cityInputValue,
  passwordInputValue: state.user.passwordInputValue,
  passwordConfirmInputValue: state.user.passwordConfirmInputValue,
  passwordConfirmMessage: state.user.passwordConfirmMessage,
  inscriptionConfirmMessage: state.user.inscriptionConfirmMessage,
});

const mapDispatchToProps = (dispatch) => ({
  handleInputValueChange: (inputValue, inputName) => (
    dispatch(createChangePseudoInputValueAction(inputValue, inputName))
  ),

  handleSubmitSignin: (e) => {
    e.preventDefault();
    dispatch(createSubmitSigninAction());
  },

  closePasswordConfirmMessage: () => dispatch({ type: 'CLOSE_PWD_ERROR_MSG' }),
});

export default connect(mapStateToProps, mapDispatchToProps)(FormRegister);
