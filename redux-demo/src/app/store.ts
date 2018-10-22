import { Map } from 'immutable';
import { tassign } from 'tassign';
import { INCREMENT } from './actions';

export interface IAppState {
   counter: number;
}

export const INTIAL_STATE: IAppState = {
    counter: 0,
};

export function rootReducer(state: Map<string, any>, action): Map<string, any> {
    switch (action.type) {
        case INCREMENT :
        return state.set('counter', state.get('counter') + 1);
    }
    return state;
}
