export const initialState = {
  pseudoInputValue: '',
  emailInputValue: '',
  cityInputValue: '',
  passwordInputValue: '',
  passwordConfirmInputValue: '',
  passwordConfirmMessage: '',
  inscriptionConfirmMessage: '',
  connectionFailedMessage: '',
  connectionSuccessMessage: '',
  varietyInputValue: '',
  textAreaDetailValue: '',
  textAreaAdviceValue: '',
  deleteConfirmMessage: '',
  emailResetInputValue: '',
  validateSendMsgResetPwd: '',
  validateUpdateProfil: '',
  confirmDelete: false,
  isLogged: !!localStorage.getItem('isLogged') || false,
  fieldConnexion: false,
  profil: {
    pseudo: localStorage.getItem('pseudo') || '',
    email: localStorage.getItem('email') || '',
    city: localStorage.getItem('city') || '',
    id: localStorage.getItem('id') || '',
    token: localStorage.getItem('token') || '',
    yourPseudo: '',
    chatEngine_id: '',
    newMessageCounter: 0,
  },
  editProfil: false,
  menuIsOpen: false,
  myList: [],
  emailConfirmMsg: '',
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'CHECK_TOKEN_FAILED':
      return {
        ...state,
        isLogged: !!localStorage.getItem('isLogged') || false,
        profil: {
          ...state.profil,
          pseudo: localStorage.getItem('pseudo') || '',
          email: localStorage.getItem('email') || '',
          city: localStorage.getItem('city') || '',
          id: localStorage.getItem('id') || '',
          token: localStorage.getItem('token') || '',
          yourPseudo: '',
          chatEngine_id: '',
          newMessageCounter: 0,
        },
      };
    case 'EMPTY_NEW_MESSAGE_COUNTER':
      return {
        ...state,
        profil: {
          ...state.profil,
          newMessageCounter: 0,
        },
      };

    case 'ON_RECEIVED_NEW_MESSAGE':
      return {
        ...state,
        profil: {
          ...state.profil,
          newMessageCounter: state.profil.newMessageCounter + 1,
        },
      };

    case 'ON_INPUT_CHANGE_SIGNIN':
      return {
        ...state,
        [action.inputName]: action.inputValue,
      };

    case 'PWD_NOT_CONFIRMED':
      return {
        ...state,
        passwordConfirmMessage: 'Les mots de passe ne correspondent pas !',
      };

    case 'PWD_WRONG':
      return {
        ...state,
        passwordConfirmMessage: 'Le mot de passe requiert au minimum 8 caractères, 1 nombre, 1 minuscule, 1 majuscule',
      };

    case 'ON_SIGNIN_SUBMIT':
      return {
        ...state,
        passwordConfirmMessage: '',
      };

    case 'CLOSE_PWD_ERROR_MSG':
      return {
        ...state,
        passwordConfirmMessage: '',
      };

    case 'LOGIN_SUCCESS':
      return {
        ...state,
        isLogged: true,
        emailInputValue: '',
        passwordInputValue: '',
        profil: {
          ...state.profil,
          pseudo: action.data.user.pseudo,
          email: action.data.user.email,
          city: action.data.user.city,
          id: action.data.user.id,
          token: action.data.token,
          newMessageCounter: 0,
        },
        connectionSuccessMessage: action.message,

      };

    case 'SIGNIN_SUCCESS':
      return {
        ...state,
        emailInputValue: '',
        passwordInputValue: '',
        inscriptionConfirmMessage: 'Votre compte a bien été créé',
      };

    case 'LOGIN_FAIL':
      return {
        ...state,
        connectionFailedMessage: action.data,
      };

    case 'ON_TOGGLE_CLICK_PROFIL':
      return {
        ...state,
        editProfil: !state.editProfil,
        pseudoInputValue: state.profil.pseudo,
        emailInputValue: state.profil.email,
        cityInputValue: state.profil.city,
      };

    case 'UPDATE_SUCCESS_WITH_PASSWORD':
      return {
        ...state,
        editProfil: false,
        profil: {
          ...state.profil,
          pseudo: state.pseudoInputValue,
          email: state.emailInputValue,
          city: state.cityInputValue,
        },
        passwordInputValue: '',
        passwordConfirmInputValue: '',
      };

    case 'UPDATE_SUCCESS_WITHOUT_PASSWORD':
      return {
        ...state,
        editProfil: false,
        profil: {
          ...state.profil,
          pseudo: state.pseudoInputValue,
          email: state.emailInputValue,
          city: state.cityInputValue,
          newMessageCounter: 0,
        },
      };

    case 'ON_MENU_CLICK':
      return {
        ...state,
        menuIsOpen: !state.menuIsOpen,
      };

    case 'CLOSE_MODAL':
      return {
        ...state,
        menuIsOpen: false,
      };
    case 'ON_SHARE_SEED_FORM_CHANGE':
      return {
        ...state,
        [action.inputName]: action.inputValue,
      };
    case 'ON_SUBMIT_SHARED_SEED_SUCCESS':
      return {
        ...state,
        varietyInputValue: '',
        textAreaDetailValue: '',
        textAreaAdviceValue: '',
      };
    case 'ON_DISCONNECT_CLICK':
      return {
        ...state,
        isLogged: false,
        profil: {
          pseudo: '',
          email: '',
          city: '',
          id: '',
        },
      };
    case 'ON_DELETE_CLICK':
      return {
        ...state,
        confirmDelete: true,
      };
    case 'GETTING_LIST_SUCCESS':
      return {
        ...state,
        deleteConfirmMessage: '',
      };
    case 'CLOSE_EDIT_MESSAGE':
      return {
        ...state,
        validateUpdateProfil: '',
      };

    case 'ON_VALIDATE_CONFIRM':
      return {
        ...state,
        validateUpdateProfil: 'Votre compte a bien été mis a jour',
        passwordConfirmMessage: '',
      };

    case 'SUBMIT_RESET_MESSAGE_SUCCESS':
      return {
        ...state,
        validateSendMsgResetPwd: 'Un email vous a été envoyé pour la réinitialisation de votre mot de passe',
      };

    case 'CLOSE_VALIDE_SEND_MSG_PWD':
      return {
        ...state,
        validateSendMsgResetPwd: '',
        fieldConnexion: false,
        emailResetInputValue: '',
      };

    case 'DELETE_SUCCESS':
      return {
        ...initialState,
      };

    case 'GET_USER_SEEDS_LIST_SUCCESS':
      return {
        ...state,
        myList: [...action.list],
      };

    case 'CANCEL_CONFIRM_DELETE_BTN':
      return {
        ...state,
        confirmDelete: false,
      };

    case 'CLOSE_MESSAGE':
      return {
        ...state,
        connectionFailedMessage: '',
        connectionSuccessMessage: '',
      };

    case 'HIDE_FIELD_CONNEXION':
      return {
        ...state,
        fieldConnexion: true,
      };

    case 'CANCEL_REINIT_PWD':
      return {
        ...state,
        fieldConnexion: false,
      };

    case 'HANDLE_RESETPASSWORD_VALUE':
      return {
        ...state,
        emailResetInputValue: action.emailResetInputValue,
      };

    case 'SHOW_FIELD_CONNEXION':
      return {
        ...state,
        fieldConnexion: false,
        emailResetInputValue: '',
        validateSendMsgResetPwd: '',
      };

    case 'CHECK_EMAIL_SUCCESS':
      return {
        ...state,
        emailConfirmMsg: action.message,
      };

    case 'CHECK_EMAIL_FAIL':
      return {
        ...state,
        emailConfirmMsg: action.message,
      };

    case 'GETTING_ONE_SEED_SUCCESS':
      return {
        ...state,
        profil: {
          ...state.profil,
          yourPseudo: action.data.pseudo_user,
        },
      };

    case 'GET_CHATENGINE_USER_ID':
      return {
        ...state,
        profil: {
          ...state.profil,
          chatEngine_id: action.id,
        },
      };

    default:
      return state;
  }
};

export default reducer;
