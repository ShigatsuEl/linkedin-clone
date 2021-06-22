import { Actions as UserActions } from "./actionType";

type RootAction = UserActions[keyof UserActions];

export default RootAction;
