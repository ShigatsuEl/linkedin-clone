export const SET_USER = "SET_USER";

export type Actions = {
  SET_USER: {
    type: typeof SET_USER;
    user: firebase.default.User | null;
  };
};
