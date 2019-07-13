import {ConfigInterface} from "../_interfaces/config.interface";

export interface ConfigStateInterface {
  config: ConfigInterface
}

export const initialConfigState: ConfigStateInterface = {
  config: null
}
