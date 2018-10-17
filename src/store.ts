import { Store, createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import toDoReducer from 'reducers/toDoReducer';
import { State } from 'model/reduxTypes';

export const store: Store<State> = createStore(
  toDoReducer,
  applyMiddleware(
    compose(thunk, (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__())
  )
);
