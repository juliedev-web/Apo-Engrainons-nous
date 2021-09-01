import { connect } from 'react-redux';
import FormShareSeed from '../../components/PageShareSeed/FormShareSeed';

const mapStateToProps = (state) => ({
  isLogged: state.user.isLogged,
  varietyInputValue: state.user.varietyInputValue,
  textAreaDetailValue: state.user.textAreaDetailValue,
  textAreaAdviceValue: state.user.textAreaAdviceValue,
  createSeedConfirmMsg: state.seeds.createSeedConfirmMsg,
  varietyInputValueEdit: state.seeds.varietyInputValueEdit,
  textAreaDetailValueEdit: state.seeds.textAreaDetailValueEdit,
  textAreaAdviceValueEdit: state.seeds.textAreaAdviceValueEdit,
  categorySeedValueEdit: state.seeds.categorySeedValueEdit,
  seed: state.seeds.seed,
});

const mapDispatchToProps = (dispatch) => ({
  handleInputValue: (inputValue, inputName, from) => {
    if (from === 'shareNewSeedPage') {
      dispatch({ type: 'ON_SHARE_SEED_FORM_CHANGE', inputValue, inputName });
    }
    if (from === 'editSeedForm') {
      dispatch({ type: 'ON_EDIT_SEED_FORM_CHANGE', inputValue, inputName });
    }
  },
  handleOnSubmit: (e, from) => {
    e.preventDefault();
    if (from === 'shareNewSeedPage') {
      dispatch({ type: 'ON_SUBMIT_SHARED_SEED' });
    }
    if (from === 'editSeedForm') {
      dispatch({ type: 'ON_SUBMIT_UPDATE_SEED' });
    }
  },
  closeEditSeed: () => dispatch({ type: 'CLOSE_EDIT_SEED' }),
  closeMessage: () => dispatch({ type: 'CLOSE_CREATE_SEED_CONFIRM_MSG' }),
});

export default connect(mapStateToProps, mapDispatchToProps)(FormShareSeed);
