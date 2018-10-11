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
}