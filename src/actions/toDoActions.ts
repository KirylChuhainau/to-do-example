import {createActions} from 'redux-actions';
import {ApolloQueryResult} from 'apollo-boost';

import apolloClient from 'apolloClient';
import getToDoList from 'queries/getToDoList';
import {GetToDoListGQL, ToDoItemEntityGQL, ToDoItemEntity} from 'model/toDoItemType';

export const {
  addItem,
  changeStatus,
  removeItem,
  setToDoList
} = createActions({
  ADD_ITEM: (text: string) => ({text}),
  CHANGE_STATUS: (id: number) => ({id}),
  REMOVE_ITEM: (id: number) => ({id}),
  SET_TO_DO_LIST: (toDoList: ToDoItemEntity[]) => ({toDoList})
});

export const loadToDoList = () => (dispatch) => {
  apolloClient
    .query<GetToDoListGQL>({query: getToDoList})
    .then((result: ApolloQueryResult<GetToDoListGQL>): void => {
      const toDoList: ToDoItemEntity[] = result.data.todoList.todoItems.map((item: ToDoItemEntityGQL): ToDoItemEntity => {
        return {
          id: item.id,
          isDone: false,
          text: item.title
        };
      });

      dispatch(setToDoList(toDoList));
    })
    .catch((err) => {
      console.log(err);
    });
};
