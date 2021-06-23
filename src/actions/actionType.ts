export const SET_USER = "SET_USER";
export const SET_LOADING_STATE = "SET_LOADING_STATE";

export type UserActions = {
  SET_USER: {
    type: typeof SET_USER;
    user: firebase.default.User | null;
  };
};

export type ArticleActions = {
  SET_USER: {
    type: typeof SET_LOADING_STATE;
    status: boolean;
  };
};
