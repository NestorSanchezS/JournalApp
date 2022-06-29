import { checkingCredentials } from "./authSlice";

export const checkingAuthentication = (email, password) => async (dispatch) => {
  dispatch(checkingCredentials());
};

export const startGoogleSignIn = (email, password) => async (dispatch) => {
  dispatch(checkingCredentials());
};
