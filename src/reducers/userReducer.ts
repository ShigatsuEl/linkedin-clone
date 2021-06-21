export interface IUserState {
  user: string | null;
}

const INITIAL_STATE = {
  user: null,
};

const userReducer = (state: IUserState = INITIAL_STATE, action: any) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default userReducer;
