import {ConfigStateInterface, initialConfigState} from "../state/config.state";
import {ConfigAction, ConfigActionEnums} from "../actions/config.action";

export const configReducers = (state = initialConfigState, action: ConfigAction): ConfigStateInterface => {
  switch (action.type) {
    case ConfigActionEnums.GetConfigSuccess: {
      return {
        ...state,
        config: action.payload
      }
    }
    default: {
      return state;
    }
  }
};
