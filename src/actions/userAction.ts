import { auth, provider } from "../firebase";
import { SET_USER } from "./actionType";

const setUser = (payload: firebase.default.User | null) => ({
  type: SET_USER,
  user: payload,
});

export const signInAPI = () => {
  return (dispatch: any) => {
    auth
      .signInWithPopup(provider)
      .then((payload) => {
        dispatch(setUser(payload.user));
      })
      .catch((error) => alert(error.message));
  };
};

export const getUserAuth = () => {
  return (dispatch: any) => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        dispatch(setUser(user));
      }
    });
  };
};
