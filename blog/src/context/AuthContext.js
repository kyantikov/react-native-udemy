import createDataContext from "./createDataContext";

const authReducer = (state, action) => {
  switch (action.type) {
    case 'sign_in':
      return {...state, isSignedIn: true};
    case 'sign_out':
      return {...state, isSignedIn: false};
    default:
      return state;
  }
};

const signIn = (dispatch) => {
  return () => {
    dispatch({ type: 'sign_in' });
  }
};

const signOut = (dispatch) => {
  return () => {
    dispatch({ type: 'sign_out' });
  }
};

export const { Context, Provider } = createDataContext(
  authReducer,
  { signIn, signOut },
  {
    isSignedIn: false,
  },
);
