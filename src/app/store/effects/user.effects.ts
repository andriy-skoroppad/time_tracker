import {Injectable} from '@angular/core';
import {Effect, ofType, Actions} from '@ngrx/effects';
import {Store, select} from '@ngrx/store'
import { of } from 'rxjs/observable/of';
import {switchMap, map, withLatestFrom} from 'rxjs/operators';
import {AppStateInterface} from "../state/app.state";
import {GetUser, GetUsers, GetUsersSuccess, GetUserSuccess, UserActionsEnums} from "../actions/user.action";
import {UserInterface} from "../_interfaces/user.interface";
import {selectUserList} from "../selectors/user.selectors";


@Injectable()
export class UserEffects {
  @Effect()
  getUser$ = this.actions$.pipe(
    ofType<GetUser>(UserActionsEnums.GetUser),
    map((action: GetUser) => action.payload),
    withLatestFrom(this.store.pipe(select(selectUserList))),// todo: add file with current selector
    switchMap(([id, users]) => {
      const selectedUser = users.filter(user => user.id === +id)[0];
      return of(new GetUserSuccess(selectedUser));
    })
  );

  @Effect()
  getUsers$ = this.actions$.pipe(
    ofType<GetUsers>(UserActionsEnums.GetUsers),
    switchMap(() => of([
      {
        id: 1,
        name: 'kolja',
        cardNumber: '123456789',
        cardType: 'maestro'
      },
      {
        id: 2,
        name: 'olja',
        cardNumber: '987654321',
        cardType: 'maestro'
      }
    ])),
    switchMap((userHttp: UserInterface[]) => of(new GetUsersSuccess(userHttp)))
  );

  constructor(private actions$: Actions,
              private store: Store<AppStateInterface>) {
  }
}
