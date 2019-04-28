import { Action } from '@ngrx/store';

export const GET_TEST = '[GET_TEST] Get Test Store';
export const SET_TEST = '[SET_TEST] Set Test Store';

export class GetAction implements Action {
  readonly type = GET_TEST;
  constructor(public payload: any) {}
}

export class SetAction implements Action {
  readonly type = SET_TEST;
  constructor(public payload: any) {}
}

export type Actions = GetAction | SetAction;
