import {createSelector} from '@ngrx/store'
import {AppStateInterface} from "../state/app.state";
import {ConfigStateInterface} from "../state/config.state";

const configState = (state: AppStateInterface) => state.config;

export const selectConfig = createSelector(
  configState,
  (state: ConfigStateInterface) => state.config
);
