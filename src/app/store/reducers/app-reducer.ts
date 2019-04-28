import { Action } from '@ngrx/store';
import * as AppActions from '../actions/app.action';
import { App } from 'src/app/store/models/app.model';

const initialState: App = {
  app: 'Tests'
};

export function AppReducer(state: App = initialState, action: AppActions.Actions) {
  switch (action.type) {
    case AppActions.SET_TEST : {
      console.log('Test', state);
      break;
    }
    default:
      return state;
  }
}
