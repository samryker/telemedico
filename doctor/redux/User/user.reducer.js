import userTypes from "./user.types";

const INITIAL_STATE = {
  currentUser: false,
  userData: null,
  userDocId: null,
  signInSuccess: false,
  signUpSuccess: false,
  resetPasswordSuccess: false,
  profileUpdatedSuccess: false,
  userD: null,
  doctorD: null,
  profileD: null,
  prevRoute: null,
  token: null,
  errors: [],
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    // AUTH
    case userTypes.SET_CURRENT_USER_OUT:
      return {
        ...state,
        currentUser: false,
      };
    // SIGN
    case userTypes.SIGN_IN_SUCCESS:
      return {
        ...state,
        signInSuccess: true,
        currentUser: true,
        userD: action.payload,
      };
    case userTypes.SIGN_UP_SUCCESS:
      return {
        ...state,
        signUpSuccess: true,
        userD: action.payload,
      };
    case userTypes.RESET_PASSWORD_SUCCESS:
      return {
        ...state,
        resetPasswordSuccess: action.payload,
      };
    // USER
    case userTypes.SET_USERNAME:
      return {
        ...state,
        userD: action.payload,
      };
    case userTypes.SET_USER:
      return {
        ...state,
        userD: action.payload,
      };
    case userTypes.SET_DOCTOR:
      return {
        ...state,
        doctorD: action.payload,
      };
    case userTypes.SET_PROFILE_DATA:
      return {
        ...state,
        profileD: action.payload,
      };
    case userTypes.SET_PREV_ROUTE:
      return {
        ...state,
        prevRoute: action.payload,
      };
    case userTypes.FETCH_USER:
      return {
        ...state,
        userData: action.payload,
      };
    case userTypes.SET_CURRENT_USER_DOC_ID:
      return {
        ...state,
        userDocId: action.payload,
      };
    case userTypes.PROFILE_UPDATED_SUCCESS:
      return {
        ...state,
        profileUpdatedSuccess: action.payload,
      };
    case userTypes.RESET_PROFILE_UPDATED_SUCCESS:
      return {
        ...state,
        profileUpdatedSuccess: false,
      };
    case userTypes.RESET_AUTH_SIGN_SUCCESS:
      return {
        ...state,
        signInSuccess: false,
        signUpSuccess: false,
      };

    // TOKEN
    case userTypes.SET_TOKEN:
      return {
        ...state,
        token: action.payload,
      };
    case userTypes.RESET_TOKEN:
      return {
        ...state,
        token: null,
      };

    // ERRORS
    case userTypes.RESET_ERRORSSTATE_FORMS:
      return {
        ...state,
        errors: [],
      };
    case userTypes.SET_ERRORS:
      return {
        ...state,
        errors: action.payload,
      };
    case userTypes.RESET_AUTH_FORMS:
      return {
        ...state,
        resetPasswordSuccess: false,
      };
    case userTypes.RESET_STATES:
      return {
        // currentUser: false,
        ...state,
        signInSuccess: false,
        signUpSuccess: false,
        resetPasswordSuccess: false,
        userD: null,
        doctorD: null,
        profileD: null,
        prevRoute: null,
        token: null,
        errors: [],
      };
    // DEFAULT
    default:
      return state;
  }
};
export default userReducer;
