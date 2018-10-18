import { ToDoItemEntity } from './toDoItemType';
import { Action } from 'redux';

export interface State {
  toDoList: ToDoItemEntity[];
  index: number;
  error: {} | null;
}

interface ToDoActionType<P> {
  type: string;
  payload?: P;
}

export type AddItemAction = ToDoActionType<AddItemPayload>;
export type ChangeStatusAction = ToDoActionType<ChangeStatusPayload>;
export type RemoveItemAction = ToDoActionType<RemoveItemPayload>;
export type SetToDoListAction = ToDoActionType<SetToDoListPayload>;

interface AddItemPayload {
  text: string;
}

interface ChangeStatusPayload {
  id: number;
}

interface RemoveItemPayload {
  id: number;
}

interface SetToDoListPayload {
  toDoList: ToDoItemEntity[];
}

export type ToDoActionPayload = SetToDoListPayload | RemoveItemPayload | ChangeStatusPayload | AddItemPayload;
