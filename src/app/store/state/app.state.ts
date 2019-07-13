import {RouterReducerState} from "@ngrx/router-store";
import {initialUserState, UserStateInterface} from "./user.state";
import {ConfigStateInterface, initialConfigState} from "./config.state";

export interface AppStateInterface {
  router?: RouterReducerState;
  user: UserStateInterface;
  config: ConfigStateInterface;
}

export const initialAppState: AppStateInterface = {
  user: initialUserState,
  config: initialConfigState
};

export function getInitialState(): AppStateInterface {
  return initialAppState;
}
