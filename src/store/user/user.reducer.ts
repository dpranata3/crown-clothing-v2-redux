import { USER_ACTION_TYPES } from './user.types';
import { setCurrentUser } from './user.action';
import { AnyAction } from 'redux';

export type UserState = {
  readonly currentUser: any;
}

const INITIAL_STATE = {
  currentUser: null,
};

export const userReducer = (
  state = INITIAL_STATE,
  action = {} as AnyAction
): UserState => {
  if(setCurrentUser.match(action)) {
    return { ...state, currentUser: action.payload };
  }

  return state;
  // const { type, payload } = action;

  // switch (type) {
  //   case USER_ACTION_TYPES.SET_CURRENT_USER:
  //     return { ...state, currentUser: payload };
  //   default:
  //     return state;
  // }
};
