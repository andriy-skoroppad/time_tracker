import {Action} from '@ngrx/store';
import {UserInterface} from "../_interfaces/user.interface";
export enum UserActionsEnums {
  GetUsers = '[User] Get Users',
  GetUsersSuccess = '[User] Get Users Success',
  GetUser = '[User] Get User',
  GetUserSuccess = '[User] Get User Success',
}

export class GetUsers implements Action {
  public readonly type = UserActionsEnums.GetUsers;
}

export class GetUsersSuccess implements Action {
  public readonly type = UserActionsEnums.GetUsersSuccess;
  constructor(public payload: UserInterface[]){}
}

export class GetUser implements Action {
  public readonly type = UserActionsEnums.GetUser;
  constructor(public payload: number){}
}

export class GetUserSuccess implements Action {
  public readonly type = UserActionsEnums.GetUserSuccess;
  constructor(public payload: UserInterface){}
}

export type UserAction = GetUser | GetUserSuccess | GetUsers | GetUsersSuccess;
