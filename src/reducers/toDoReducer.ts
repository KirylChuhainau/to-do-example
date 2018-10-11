import { handleActions } from 'redux-actions';

import { addItem } from 'actions/toDoActions';
import { State, AddItemAction } from 'model/reduxTypes';
import { ToDoItemEntity } from 'model/toDoItemType';

const defaultState: State = {
  toDoList: [],
  index: 0,
  error: null
};

const toDoReducer = handleActions (
  {
    [addItem.toString()]: (state: State, action: AddItemAction) => {
      const newItem:ToDoItemEntity = {
        id: state.index + 1,
        text: action.payload.text,
        isDone: false
      };
  
      return {
        ...state,
        toDoList: [...state.toDoList, newItem],
        index: state.index + 1
      }
    }
  },
  defaultState
)

export default toDoReducer;
