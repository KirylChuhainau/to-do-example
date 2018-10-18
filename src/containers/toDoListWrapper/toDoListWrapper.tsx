import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import AddItemForm from 'components/toDoList/addItemForm';
import ToDoList from 'components/toDoList/toDoList';
import { ToDoItemEntity } from 'model/toDoItemType';
import { State } from 'model/reduxTypes';
import { addItem, changeStatus, removeItem, loadToDoList } from 'actions/toDoActions';

import './toDoListWrapper.scss';

interface StateProps {
  toDoItems: ToDoItemEntity[];
}

interface DispatchProps {
  addItem(text: string): void;
  changeStatus(id: number): void;
  loadToDoList(): void;
  removeItem(id: number): void;
}

type Props = StateProps & DispatchProps;

class ToDoListWrapper extends React.Component<Props> {

  public componentDidMount(): void {
    this.props.loadToDoList();
  }

  public render(): React.ReactNode {
    return (
      <div className='to-do-list-wrapper'>
        <AddItemForm onSubmit={this._addNewItem}/>
        <ToDoList
          toDoItems={this.props.toDoItems}
          onItemStatusChanged={this._onItemStatusChanged}
          onItemRemoved={this._onItemRemoved}
        />
      </div>
    );
  }

  private _addNewItem = (text: string) => {
    this.props.addItem(text);
  }

  private _onItemStatusChanged = (id: number) => {
    this.props.changeStatus(id);
  }

  private _onItemRemoved = (id: number) => {
    this.props.removeItem(id);
  }
}

const mapStateToProps = (state: State): StateProps => ({
  toDoItems: state.toDoList
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => bindActionCreators(
  {
    addItem,
    changeStatus,
    loadToDoList,
    removeItem
  },
  dispatch
);

export default connect(mapStateToProps, mapDispatchToProps)(ToDoListWrapper);
