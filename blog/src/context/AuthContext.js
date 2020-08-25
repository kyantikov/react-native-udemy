import createDataContext from "./createDataContext";

const authReducer = (state, action) => {
  switch (action.type) {
    case 'sign_in':
      return {...state, isSignedIn: true};
    case 'sign-in-super-user':
      return {...state, isSignedIn: true, isSuperUser: true };
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

const signInSuperUser = (dispatch) => {
  console.log('signing in super user');
  return () => {
    dispatch({ type: 'sign-in-super-user' });
  }
};

const signOut = (dispatch) => {
  return () => {
    dispatch({ type: 'sign_out' });
  }
};

export const { Context, Provider } = createDataContext(
  authReducer,
  { signIn, signInSuperUser, signOut },
  {
    isSignedIn: false,
    isSuperUser: false,
  },
);
