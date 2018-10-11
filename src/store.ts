import { Store, createStore } from 'redux';

import toDoReducer from 'reducers/toDoReducer';
import { State } from 'model/reduxTypes';

export const store: Store<State> = createStore(
  toDoReducer,
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
);
