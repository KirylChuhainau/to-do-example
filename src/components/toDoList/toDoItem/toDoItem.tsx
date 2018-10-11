import * as React from 'react';

import {ToDoItemEntity} from 'model/toDoItemType';

import './toDoItem.scss';

interface Props {
  toDoItem: ToDoItemEntity;
  onStatusChanged(id: number): void;
  onRemove(id: number): void;
};

class ToDoItem extends React.Component<Props> {
  private _onChangeHandler = (e) => {
    const { onStatusChanged, toDoItem } = this.props;

    onStatusChanged(toDoItem.id);
  }

  private _onRemoveClickHandler = (e) => {
    const { onRemove, toDoItem } = this.props;

    onRemove(toDoItem.id);
  }
  
  public render() {
    const { isDone, id, text } = this.props.toDoItem;

    return (
      <li className='to-do-list__to-do-item to-do-item'>
        <input
          type='checkbox'
          id={ id.toString() }
          checked={ isDone }
          onChange={ this._onChangeHandler }
          className='to-do-item__checkbox'
          />
        <label 
          htmlFor={ id.toString() }
          className='to-do-item__label'
        />
        <p className='to-do-item__text'>
          { text }
        </p>
        <button 
          className='to-do-item__remove-button' 
          aria-label={`Remove item with text: ${text}`}
          onClick={this._onRemoveClickHandler}
        >
          x
        </button>
      </li>
    );
  }
};

export default ToDoItem;