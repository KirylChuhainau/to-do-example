import * as React from 'react';
import {shallow} from 'enzyme';

import {ToDoItemEntity} from 'model/toDoItemType';
import ToDoItem, { Props } from 'components/toDoList/toDoItem/toDoItem';

describe ('components/toDoList/toDoItem tests', () => {
  it('should render as expected ', () => {
      // Arrange
      const newItem: ToDoItemEntity = {
        id: 0,
        text: 'test text',
        isDone: false
      };

      const testingProps: Props = {
        toDoItem: newItem,
        onStatusChanged: () => {return; },
        onRemove: () => {return; }
      };

      // Act
      const component = shallow(
          <ToDoItem {...testingProps} />
       );
      // Assert
      expect (component).toMatchSnapshot();
  });
});
