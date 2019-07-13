import {createSelector} from '@ngrx/store'
import {AppStateInterface} from "../state/app.state";
import {UserStateInterface} from "../state/user.state";

const selectUsers = (state: AppStateInterface) => state.user;

export const selectUserList = createSelector(
  selectUsers,
  (state: UserStateInterface) => state.users
);

export const selectSelectedUser = createSelector(
  selectUsers,
  (state: UserStateInterface) => state.selectedUser
);


