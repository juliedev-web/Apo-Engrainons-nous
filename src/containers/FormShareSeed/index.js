import { connect } from 'react-redux';
import FormShareSeed from '../../components/PageShareSeed/FormShareSeed';

const mapStateToProps = (state) => ({
  isLogged: state.user.isLogged,
  varietyInputValue: state.user.varietyInputValue,
  textAreaDetailValue: state.user.textAreaDetailValue,
  textAreaAdviceValue: state.user.textAreaAdviceValue,
});

const mapDispatchToProps = (dispatch) => ({
  handleInputValue: (inputValue, inputName) => {
    dispatch({ type: 'ON_SHARE_SEED_FORM_CHANGE', inputValue, inputName });
  },
  handleOnSubmit: (e) => {
    e.preventDefault();
    dispatch({ type: 'ON_SUBMIT_SHARED_SEED' });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(FormShareSeed);
