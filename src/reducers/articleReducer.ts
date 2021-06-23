import RootAction from "../actions";
import { SET_LOADING_STATE } from "../actions/actionType";

export interface ILoaderState {
  loading: boolean;
}

const INITIAL_STATE = {
  loading: false,
};

const articleReducer = (
  state: ILoaderState = INITIAL_STATE,
  action: RootAction
) => {
  switch (action.type) {
    case SET_LOADING_STATE:
      return {
        ...state,
        loading: action.status,
      };
    default:
      return state;
  }
};

export default articleReducer;
