import { UserActions, ArticleActions } from "./actionType";

type RootAction =
  | UserActions[keyof UserActions]
  | ArticleActions[keyof ArticleActions];

export default RootAction;
