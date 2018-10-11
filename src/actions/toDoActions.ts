import {createActions} from 'redux-actions';

export const {
  addItem,
  changeStatus,
  removeItem
} = createActions({
  ADD_ITEM: (text: string) => ({ text }),
  CHANGE_STATUS: (id: number) => ({ id }),
  REMOVE_ITEM: (id: number) => ({ id })
});