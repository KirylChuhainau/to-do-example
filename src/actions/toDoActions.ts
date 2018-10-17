import {createActions} from 'redux-actions';

import apolloClient from 'apolloClient';
import getToDoList from 'queries/getToDoList';
import {ToDoItemEntity} from 'model/toDoItemType';

export const {
  addItem,
  changeStatus,
  removeItem,
  setToDoList
} = createActions({
  ADD_ITEM: (text: string) => ({text}),
  CHANGE_STATUS: (id: number) => ({id}),
  REMOVE_ITEM: (id: number) => ({id}),
  SET_TO_DO_LIST: (list: ToDoItemEntity[]) => ({list})
});

export const loadToDoList = () => (dispatch) => {
  apolloClient
    .query({query: getToDoList})
    .then(({data}) => {
      console.log(data);
      dispatch(setToDoList(data));
    })
    .catch((err) => {
      console.log(err);
    });
};
