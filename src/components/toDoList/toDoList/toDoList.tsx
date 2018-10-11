import * as React from 'react';

import {ToDoItemEntity} from 'model/toDoItemType';
import ToDoItem from '../toDoItem/toDoItem';

import './toDoList.scss';

interface Props {
  toDoItems: ToDoItemEntity[];
  onItemStatusChanged(id: number): void;
  onItemRemoved(id: number): void;
};

class ToDoList extends React.Component<Props> {

  public render() {
    return (
      <ul className="to-do-list to-do-list-wrapper__to-do-list">
      {
        this.props.toDoItems.map((toDoItem) => (
          <ToDoItem 
            toDoItem={ toDoItem } 
            key={ toDoItem.id } 
            onStatusChanged={ this.props.onItemStatusChanged }
            onRemove={ this.props.onItemRemoved }
          />
        ))
      }
      </ul>
    )
  };
};

export default ToDoList;