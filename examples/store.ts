import { Store, Reducer } from 'redux';
import { isType } from 'typescript-fsa';
import * as actions from './actions';

interface State {
  loading: boolean,
  error: boolean,
  items: string[]
}

export const initialState: State = {
  loading: false,
  error: false,
  items: []
};

export const reducer: Reducer<State> = (state, action) => {

  if (isType(action, actions.addItem)) {
    return {
      ...state,
      items: [...state.items, action.payload.id]
    }
  }

  else if (isType(action, actions.clearItems)) {
    return {
      ...state,
      items: []
    }
  }

  else {
    return state;
  }

};
