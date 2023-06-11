import { USER_ACTION_TYPES } from './user.types';
import {
  createAction,
  Action,
  withMatcher,
} from "../../utils/reducer/reducer.utils";
import { UserState } from './user.reducer';

export type SetCurrentUser = Action<USER_ACTION_TYPES.SET_CURRENT_USER>;

export const setCurrentUser = withMatcher(
  (user: UserState): SetCurrentUser =>
    createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user)
);
