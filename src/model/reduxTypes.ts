import { ToDoItemEntity } from './toDoItemType';
import { Action } from 'redux';

export type State = {
  toDoList: ToDoItemEntity[],
  index: number,
  error: {} | null
};

export interface AddItemAction extends Action {
  type: 'ADD_ITEM';
  payload: {
    text: string;
  };
};

export interface ChangeStatusAction extends Action {
  type: 'CHANGE_STATUS';
  payload: {
    id: number;
  };
};

export interface RemoveItemAction extends Action {
  type: 'REMOVE_ITEM';
  payload: {
    id: number;
  };
};

export type ToDoActions = AddItemAction & ChangeStatusAction & RemoveItemAction;