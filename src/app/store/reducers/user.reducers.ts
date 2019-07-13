import {initialUserState, UserStateInterface} from '../state/user.state'
import {UserAction, UserActionsEnums} from "../actions/user.action";


export const userReducer = (state = initialUserState, action: UserAction): UserStateInterface => {
  switch (action.type) {
    case UserActionsEnums.GetUsersSuccess: {
      return {
        ...state,
        users: action.payload
      }
    }
    case UserActionsEnums.GetUserSuccess: {
      return {
        ...state,
        selectedUser: action.payload
      }
    }
    default: {
      return state;
    }
  }
};
