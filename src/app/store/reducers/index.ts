import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from '../../../environments/environment';
import { AppReducer } from 'src/app/store/reducers/app-reducer';

// export interface State {
//
// }

export const reducers: ActionReducerMap<any> = {
  AppReducer
};


export const metaReducers: MetaReducer<any>[] = !environment.production ? [] : [];
