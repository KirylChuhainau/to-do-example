import { handleActions } from 'redux-actions';

import { addItem, changeStatus, removeItem, setToDoList } from 'actions/toDoActions';
import {
  State,
  ToDoActionPayload,
  AddItemAction,
  ChangeStatusAction,
  RemoveItemAction,
  SetToDoListAction
} from 'model/reduxTypes';
import { ToDoItemEntity } from 'model/toDoItemType';

const defaultState: State = {
  toDoList: [],
  index: 0,
  error: null
};

const toDoReducer = handleActions<State, ToDoActionPayload> (
  {
    [addItem.toString()]: (state: State, action: AddItemAction) => {
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
    [changeStatus.toString()]: (state: State, action: ChangeStatusAction) => {
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
    [setToDoList.toString()]: (state: State, action: SetToDoListAction) => {
      return {
        ...state,
        toDoList: action.payload.toDoList
      };
    },
    [removeItem.toString()]: (state: State, action: RemoveItemAction) => {
      return {
        ...state,
        toDoList: state.toDoList.filter((toDoItem: ToDoItemEntity) => toDoItem.id !== action.payload.id)
      };
    }
  },
  defaultState
);

export default toDoReducer;
