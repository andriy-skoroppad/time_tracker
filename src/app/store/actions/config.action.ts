import {Action} from '@ngrx/store'
import {ConfigInterface} from "../_interfaces/config.interface";
export enum ConfigActionEnums {
  GetConfig = '[Config] Get config',
  GetConfigSuccess = '[config] Get config success'
}

export class GetConfig implements Action {
  public readonly type = ConfigActionEnums.GetConfig;
}

export class GetConfigSuccess implements Action {
  public readonly type = ConfigActionEnums.GetConfigSuccess;
  constructor(public payload: ConfigInterface) {}
}

export type ConfigAction = GetConfig | GetConfigSuccess;
