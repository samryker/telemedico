import userTypes from "./user.types";
import {
  storeData,
  removeStoreData,
  getStorage,
} from "../../util/AsyncStorage";
import { auth, db } from "./../../firebase/utils";
import { doc, getDoc, setDoc } from "firebase/firestore";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

// PROPERTY
export const signUpUser = (user, token) => async (dispatch) => {
  try {
    dispatch({
      type: userTypes.SIGN_UP_SUCCESS,
      payload: user,
    });
    dispatch({
      type: userTypes.SET_TOKEN,
      payload: token,
    });
    await createUserWithEmailAndPassword(auth, user.email, user.password)
      .then(async (userCredential) => {
        const timestemps = new Date();
        const userD = {
          uid: userCredential.user.uid,
          fullname: user.firstName,
          email: user.email,
          phone: "",
          dob: "",
          city: "",
          password: user.password,
          avatar: "",
          createdAt: timestemps,
          updatedAt: null,
          deletedAt: null,
        };
        await setDoc(doc(db, "users", `${userCredential.user.uid}`), userD);
        dispatch({
          type: userTypes.SET_CURRENT_USER_DOC_ID,
          payload: userCredential.user.uid,
        });
      })
      .catch((err) => {
        console.log("error from signUp => ", err);
      });
  } catch (err) {
    console.log(err);
  }
};
export const setUserame = (username, email, password) => async (dispatch) => {
  try {
    dispatch({
      type: userTypes.SET_USERNAME,
      payload: { username, email, password },
    });
  } catch (err) {
    console.log(err);
  }
};
export const signInUser = (user, token) => async (dispatch) => {
  try {
    await storeData({
      key: "user_info",
      data: {
        isLogin: true,
        user,
        token,
      },
    });
    dispatch({
      type: userTypes.SIGN_IN_SUCCESS,
      payload: user,
    });
    dispatch({
      type: userTypes.SET_TOKEN,
      payload: token,
    });
    await signInWithEmailAndPassword(auth, user.email, user.password)
      .then((userCredential) => {
        dispatch({
          type: userTypes.SET_CURRENT_USER_DOC_ID,
          payload: userCredential.user.uid,
        });
      })
      .catch(async (err) => {
        if (err.code === "auth/user-not-found") {
          await createUserWithEmailAndPassword(auth, user.email, user.password)
            .then(async (userCred) => {
              const timestemps = new Date();
              const userD = {
                uid: userCred.user.uid,
                fullname: "",
                email: user.email,
                phone: "",
                dob: "",
                city: "",
                password: user.password,
                avatar: "",
                createdAt: timestemps,
                updatedAt: null,
                deletedAt: null,
              };
              await setDoc(doc(db, "users", `${userCred.user.uid}`), userD);
              dispatch({
                type: userTypes.SET_CURRENT_USER_DOC_ID,
                payload: userCred.user.uid,
              });
            })
            .catch((err) => {
              console.log("error from signUp => ", err);
            });
        } else {
          console.log("error from signIn User => ", err.code);
        }
      });
  } catch (err) {
    console.log(err);
  }
};
export const signOutUser = () => async (dispatch) => {
  await removeStoreData("user_info");
  try {
    dispatch({
      type: userTypes.SET_CURRENT_USER_OUT,
    });
  } catch (err) {
    console.log(err);
  }
};

export const profileUpdatedSuccess = () => async (dispatch) => {
  try {
    dispatch({
      type: userTypes.PROFILE_UPDATED_SUCCESS,
    });
  } catch (error) {
    console.log("error profileUpdatedSuccess => ", error);
  }
};
export const restProfileUpdatedSuccess = () => async (dispatch) => {
  try {
    dispatch({
      type: userTypes.RESET_PROFILE_UPDATED_SUCCESS,
    });
  } catch (error) {
    console.log("error restProfileUpdatedSuccess => ", error);
  }
};
export const resetAuthSign = () => async (dispatch) => {
  try {
    dispatch({
      type: userTypes.RESET_AUTH_SIGN_SUCCESS,
    });
  } catch (error) {
    console.log("error resetAuthSign => ", error);
  }
};

export const getCurrentUser = (docId) => async (dispatch) => {
  try {
    const docRef = doc(db, "users", docId);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      dispatch({
        type: userTypes.FETCH_USER,
        payload: docSnap.data(),
      });
    } else {
      console.log("error from here 122 actions ");
    }
  } catch (error) {
    console.log("error from ", error);
  }
};

export const setUser = (user) => async (dispatch) => {
  try {
    dispatch({
      type: userTypes.SET_USER,
      payload: user,
    });
  } catch (err) {
    console.log("error from setUser catch !!");
    console.log(err);
  }
};
export const setProfile = (user) => async (dispatch) => {
  console.log("Here setProfile Redux");
  try {
    dispatch({
      type: userTypes.SET_PROFILE_DATA,
      payload: user,
    });
  } catch (err) {
    console.log("error from setProfile catch !!");
    console.log(err);
  }
};
export const setDoctor = (user) => async (dispatch) => {
  try {
    dispatch({
      type: userTypes.SET_DOCTOR,
      payload: user,
    });
  } catch (err) {
    console.log("error from setDoctor catch !!");
    console.log(err);
  }
};
export const getUser = (email) => async (dispatch) => {
  try {
    console.log("Get User");
  } catch (err) {
    console.log("error from fetchPrperty catch !!");
    console.log(err);
  }
};
export const getPrevRoute = (value) => async (dispatch) => {
  try {
    console.log("getPrevRoute", value);
    dispatch({
      type: userTypes.SET_PREV_ROUTE,
      payload: value,
    });
  } catch (err) {
    console.log("error from fetchPrperty catch !!");
    console.log(err);
  }
};
// Token
export const resetToken = () => ({
  type: userTypes.RESET_TOKEN,
});
// OTHERS
export const resetAllAuthForms = () => ({
  type: userTypes.RESET_AUTH_FORMS,
});
export const ResetErrorsState = () => ({
  type: userTypes.RESET_ERRORSSTATE_FORMS,
});
export const ResetStates = () => ({
  type: userTypes.RESET_STATES,
});
