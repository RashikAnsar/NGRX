import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';

import * as toppingActions from '../actions/toppings.action';
import { map, switchMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';
import { ToppingsService } from '../../services/toppings.service';

@Injectable()
export class ToppingsEffects {
  constructor(private actions$: Actions, private toppingService: ToppingsService) {}

  @Effect()
  loadToppings$ = this.actions$.ofType(toppingActions.LOAD_TOPPINGS)
    .pipe(
      switchMap(() => this.toppingService.getToppings().pipe(
        map(toppings => new toppingActions.LoadToppingsSuccess(toppings)),
        catchError(error => of(new toppingActions.LoadToppingsFail(error)))
      ))
    );
}
