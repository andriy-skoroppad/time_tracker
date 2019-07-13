import {ActionReducerMap} from "@ngrx/store";
import {routerReducer} from "@ngrx/router-store";
import {AppStateInterface} from "../state/app.state";
import {userReducer} from "./user.reducers";
import {configReducers} from "./config.reducers";

export const appReducers: ActionReducerMap<AppStateInterface, any> = {
  router: routerReducer,
  user: userReducer,
  config: configReducers
}
