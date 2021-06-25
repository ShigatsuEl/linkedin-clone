import firebase from "firebase/app";
import RootAction from "../actions";
import { GET_ARTICLES, SET_LOADING_STATE } from "../actions/actionType";

export interface IArticleState {
  articles: firebase.firestore.DocumentData[];
  loading: boolean;
}

const INITIAL_STATE = {
  articles: [],
  loading: false,
};

const articleReducer = (
  state: IArticleState = INITIAL_STATE,
  action: RootAction
) => {
  switch (action.type) {
    case GET_ARTICLES:
      return {
        ...state,
        articles: action.payload,
      };
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
