import { SET_USER } from "../actions/actionType";
import RootAction from "../actions";

export interface IUserState {
  user: firebase.default.User | null;
}

const INITIAL_STATE = {
  user: null,
};

const userReducer = (state: IUserState = INITIAL_STATE, action: RootAction) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: action.user,
      };
    default:
      return state;
  }
};

export default userReducer;
