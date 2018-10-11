import {createActions} from 'redux-actions';

import { ToDoItemEntity } from 'model/toDoItemType';

export const {
  addItem
} = createActions({
  ADD_ITEM: (text: string) => ({ text })
});