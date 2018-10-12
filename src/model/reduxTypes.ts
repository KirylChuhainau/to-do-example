import { ToDoItemEntity } from './toDoItemType';
import { Action } from 'redux';

export interface State {
  toDoList: ToDoItemEntity[];
  index: number;
  error: {} | null;
}

export interface AddItemAction extends Action {
  type: string;
  payload: {
    text: string;
  };
}

export interface ChangeStatusAction extends Action {
  type: string;
  payload: {
    id: number;
  };
}

export interface RemoveItemAction extends Action {
  type: string;
  payload: {
    id: number;
  };
}

export type ToDoActions = AddItemAction & ChangeStatusAction & RemoveItemAction;
