import * as React from 'react';

import './addItemForm.scss';

interface Props {
  onSubmit(text:string): void
}

class AddItemForm extends React.Component<Props> {

  private _textInput = React.createRef<HTMLInputElement>();

  private _onSubmitHandler = (e) => {
    e.preventDefault();
    this.props.onSubmit(this._textInput.current.value);
  }

  public render() {
    return (
      <form className="add-item-form" onSubmit={this._onSubmitHandler}>
        <input 
          type='text' 
          name='newItemInput' 
          placeholder='Type text here' 
          className='add-item-form__input'
          ref={this._textInput}
          tabIndex={0}
        />
        <button 
          type='submit'
          className='add-item-form__submit'
          tabIndex={0}  
        > Add item </button>
      </form>
    )
  };
}

export default AddItemForm;