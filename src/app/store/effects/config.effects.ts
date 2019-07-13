import {Injectable} from '@angular/core';
import {Effect, ofType, Actions} from '@ngrx/effects';
import {Store, select} from '@ngrx/store'
import {of} from 'rxjs/observable/of';
import {switchMap, map, withLatestFrom} from 'rxjs/operators';
import {AppStateInterface} from "../state/app.state";
import {ConfigActionEnums, GetConfig, GetConfigSuccess} from "../actions/config.action";
import {ConfigInterface} from "../_interfaces/config.interface";

const requestData: ConfigInterface = {adminName: 'kolja', permission: ['a', 'b']};

@Injectable()
export class ConfigEffects {
  @Effect()
  getConfig$ = this.actions$.pipe(
    ofType<GetConfig>(ConfigActionEnums.GetConfig),
    switchMap(() => of(requestData)),
    switchMap( (config: ConfigInterface) => {
      return of(new GetConfigSuccess(config))
    })
  );

  constructor(private actions$: Actions,
              private store: Store<AppStateInterface>) {
  }
}
