import toDoReducer from 'reducers/toDoReducer';
import {ToDoItemEntity} from 'model/toDoItemType';
import {
  State,
  AddItemAction,
  ChangeStatusAction,
  RemoveItemAction
} from 'model/reduxTypes';

describe('Testing the toDo reducer:', () => {
  it('AddItemAction: should add a new item', () => {
    // Arrange
    const state: State = {
      toDoList: [],
      index: 0,
      error: null
    };

    const newItem: ToDoItemEntity = {
      id: 1,
      isDone: false,
      text: 'item'
    };

    const action: AddItemAction = { type: 'ADD_ITEM', payload: {text: 'item'}};

    // Act
    const nextState = toDoReducer(state, action);

    // Assert
    expect(nextState.toDoList).toContainEqual(newItem);
  });

  it('ChangeStatusAction: Should change status by id', () => {
    // Arrange
    const newItem: ToDoItemEntity = {
      id: 1,
      isDone: false,
      text: 'item'
    };

    const state: State = {
      toDoList: [newItem],
      index: 2,
      error: null
    };

    const action: ChangeStatusAction = { type: 'CHANGE_STATUS', payload: {id: 1}};

    // Act
    const nextState = toDoReducer(state, action);

    // Assert
    expect(nextState.toDoList[0].isDone).toBe(true);
  });

  it('RemoveItemAction: Should remove item by id', () => {
    // Arrange
    const item: ToDoItemEntity = {
      id: 1,
      isDone: false,
      text: 'item'
    };

    const state: State = {
      toDoList: [item],
      index: 2,
      error: null
    };

    const action: RemoveItemAction = { type: 'REMOVE_ITEM', payload: {id: 1}};

    // Act
    const nextState = toDoReducer(state, action);

    // Assert
    expect(nextState.toDoList.length).toBe(0);
  });
});
