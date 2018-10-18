import { Store, createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';

import toDoReducer from 'reducers/toDoReducer';
import { State } from 'model/reduxTypes';

export const store: Store<State> = createStore(
  toDoReducer,
  applyMiddleware(
    thunkMiddleware
  )
);
