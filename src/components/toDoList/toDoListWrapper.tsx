import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import AddItemForm from './addItemForm/addItemForm';
import ToDoList from './toDoList/toDoList';
import { ToDoItemEntity } from 'model/toDoItemType';
import { getId } from 'services/idService';
import { State } from 'model/reduxTypes';
import { addItem } from 'actions/toDoActions';

import './toDoListWrapper.scss';

interface StateProps {
  toDoItems: ToDoItemEntity[];
};

interface DispatchProps {
  addItem(text: string): void;
};

type Props = StateProps & DispatchProps;

class ToDoListWrapper extends React.Component<Props> {
  private _addNewItem = (text: string) => {
    this.props.addItem(text);
  }

  public render() {
    return (
      <div className="to-do-list-wrapper">
        <AddItemForm onSubmit={this._addNewItem}/>
        <ToDoList toDoItems={this.props.toDoItems} />
      </div>
    );
  }
};

const mapStateToProps = (state: State): StateProps => ({
  toDoItems: state.toDoList
});

const mapDispatchToProps = (dispatch) => bindActionCreators(
  {
    addItem
  }, 
  dispatch
);

export default connect(mapStateToProps, mapDispatchToProps)(ToDoListWrapper);