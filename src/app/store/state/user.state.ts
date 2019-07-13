
import {UserInterface} from "../_interfaces/user.interface";

export interface UserStateInterface {
  users: UserInterface[];
  selectedUser: UserInterface
}

export const initialUserState: UserStateInterface = {
  users: null,
  selectedUser: null
};
