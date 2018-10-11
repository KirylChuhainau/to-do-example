import * as React from 'react';

import {ToDoItemEntity} from 'model/toDoItemType';

import './toDoItem.scss';

interface Props {
  toDoItem: ToDoItemEntity;
}

interface State {
  isDone: boolean;
}

class ToDoItem extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = { isDone: props.toDoItem.isDone };
  }

  private _onChangeHandler = (e) => {
    this.setState((prevState) => ({
      isDone: !prevState.isDone
    }));
  }
  
  public render() {
    return (
      <li className="to-do-list__to-do-item to-do-item">
        <input
          type='checkbox'
          id={this.props.toDoItem.id.toString()}
          checked={this.state.isDone}
          onChange={this._onChangeHandler}
          className="to-do-item__checkbox"
          />
        <label 
          htmlFor={this.props.toDoItem.id.toString()}
          className="to-do-item__label"
        />
        <p className="to-do-item__text">
          {this.props.toDoItem.text}
        </p>
      </li>
    );
  }
};

export default ToDoItem;