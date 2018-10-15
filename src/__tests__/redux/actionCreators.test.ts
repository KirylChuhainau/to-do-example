import {addItem, changeStatus, removeItem} from 'actions/toDoActions';

const textForTest: string = 'test_test test_test';
const numberForTest: number = 5;

describe('Testing the action creators:', () => {
  it('ADD_ITEM', () => {
    // Arrange
    const expectedResult = {
      type: 'ADD_ITEM',
      payload: {
        text: textForTest
      }
    };

    // Act
    const action = addItem(textForTest);

    // Assert
    expect(action).toEqual(expectedResult);
  });

  it('CHANGE_STATUS', () => {
    // Arrange
    const expectedResult = {
      type: 'CHANGE_STATUS',
      payload: {
        id: numberForTest
      }
    };

    // Act
    const action = changeStatus(numberForTest);

    // Assert
    expect(action).toEqual(expectedResult);
  });

  it('REMOVE_ITEM', () => {
    // Arrange
    const expectedResult = {
      type: 'REMOVE_ITEM',
      payload: {
        id: numberForTest
      }
    };

    // Act
    const action = removeItem(numberForTest);

    // Assert
    expect(action).toEqual(expectedResult);
  });
});
