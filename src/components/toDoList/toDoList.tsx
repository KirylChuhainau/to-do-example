import * as React from 'react';

import AddItemForm from './addItemForm/addItemForm';

import './toDoList.scss';

class ToDoList extends React.Component<{}> {
  private _addNewItem(text: string) {
    console.log(text);
  }

  public render() {
    return (
      <div className="to-do-list">
        <AddItemForm onSubmit={this._addNewItem}/>
      </div>
    )
  };
}

export default ToDoList;