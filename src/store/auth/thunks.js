import {
  loginWithEmailPassword,
  logoutFirebase,
  registerUserWithEmailPassword,
  signInWithGoogle,
} from "../../firebase/providers";
import { checkingCredentials, login, logout } from "./authSlice";

//Autenticacion con email y password poniendo el status en "checking"
export const checkingAuthentication = (email, password) => async (dispatch) => {
  dispatch(checkingCredentials());
};

//Autentication with google
export const startGoogleSignIn = () => async (dispatch) => {
  dispatch(checkingCredentials());
  const result = await signInWithGoogle();
  if (!result.ok) return dispatch(logout(result.errorMessage));
  dispatch(login(result));
};

export const startCreatingUserWithEmailPassword =
  ({ email, password }) =>
  async (dispatch) => {
    dispatch(checkingCredentials());
    const { ok, uid, photoURL, errorMessage } =
      await registerUserWithEmailPassword({
        email,
        password,
      });

    if (!ok) return dispatch(logout({ errorMessage }));

    dispatch(login({ uid, photoURL, displayName, email }));
  };

export const startLoginWithEmailPassword =
  ({ email, password }) =>
  async (dispatch) => {
    dispatch(checkingCredentials());
    const resp = await loginWithEmailPassword({
      email,
      password,
    });
    console.log(resp);
    if (!resp.ok) return dispatch(logout(resp));
    dispatch(login(resp));
  };

export const startLogout = () => async (dispatch) => {
  await logoutFirebase();
  dispatch(logout({}));
};
