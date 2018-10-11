import { handleActions } from 'redux-actions';

import { addItem, changeStatus, removeItem } from 'actions/toDoActions';
import { State, ToDoActions } from 'model/reduxTypes';
import { ToDoItemEntity } from 'model/toDoItemType';

const defaultState: State = {
  toDoList: [],
  index: 0,
  error: null
};

const toDoReducer = handleActions (
  {
    [addItem.toString()]: (state: State, action: ToDoActions) => {
      const newItem: ToDoItemEntity = {
        id: state.index + 1,
        text: action.payload.text,
        isDone: false
      };

      return {
        ...state,
        toDoList: [...state.toDoList, newItem],
        index: state.index + 1
      };
    },
    [changeStatus.toString()]: (state: State, action: ToDoActions) => {
      const newToDo = state.toDoList.map((toDoItem: ToDoItemEntity) => {
        if (toDoItem.id === action.payload.id) {
          return {
            ...toDoItem,
            isDone: !toDoItem.isDone
          };
        }
        return toDoItem;
      });

      return {
        ...state,
        toDoList: newToDo
      };
    },
    [removeItem.toString()]: (state: State, action: ToDoActions) => {
      return {
        ...state,
        toDoList: state.toDoList.filter((toDoItem: ToDoItemEntity) => toDoItem.id !== action.payload.id)
      };
    }
  },
  defaultState
);

export default toDoReducer;
