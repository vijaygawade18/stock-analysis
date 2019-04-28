import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of as observableOf } from 'rxjs';
import { catchError, map, startWith, switchMap } from 'rxjs/operators';
import * as appActions from '../actions/app.action';

@Injectable()
export class AppEffects {
  constructor(private actions$: Actions) {
  }

  @Effect()
  loginRequestEffect$: Observable<Action> = this.actions$.pipe(
      ofType<appActions.GetAction>(
          appActions.GET_TEST
      ),
      switchMap(action =>
          [new appActions.SetAction({
            test: 1234
          })]
      )
  );
}
