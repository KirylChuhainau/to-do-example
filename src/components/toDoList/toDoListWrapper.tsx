import * as React from 'react';

import AddItemForm from './addItemForm/addItemForm';
import ToDoList from './toDoList/toDoList';
import {ToDoItemEntity} from 'model/toDoItemEntity';
import {getId} from 'services/idService';

import './toDoListWrapper.scss';

const fakeData = [
  {
    id: 1,
    text: 'do it',
    isDone: true
  },
  {
    id: 2,
    text: 'Buy the car',
    isDone: false
  },
]

interface State {
  toDoItems: ToDoItemEntity[];
}

class ToDoListWrapper extends React.Component<{}, State> {
  constructor(props) {
    super(props);
    this.state = {toDoItems: fakeData};
  }
  
  private _addNewItem = (text: string) => {
    this.setState((prevState) => {
      const newItem:ToDoItemEntity = {
        id: getId(),
        text: text,
        isDone: false
      };

      return {
        toDoItems: [...prevState.toDoItems, newItem]
      };
    });
  }

  public render() {
    return (
      <div className="to-do-list-wrapper">
        <AddItemForm onSubmit={this._addNewItem}/>
        <ToDoList toDoItems={this.state.toDoItems} />
      </div>
    )
  };
}

export default ToDoListWrapper;