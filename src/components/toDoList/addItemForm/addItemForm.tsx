import * as React from 'react';

import './addItemForm.scss';

interface Props {
  onSubmit(text: string): void;
}

class AddItemForm extends React.PureComponent<Props> {

  private _textInput: React.RefObject<HTMLInputElement> = React.createRef<HTMLInputElement>();

  public render(): React.ReactNode {
    return (
      <form className='add-item-form to-do-list-wrapper__add-item-form' onSubmit={this._onSubmitHandler}>
        <input
          type='text'
          name='newItemInput'
          placeholder='Type text here'
          className='add-item-form__input'
          ref={this._textInput}
          required={true}
          tabIndex={0}
        />
        <button
          type='submit'
          className='add-item-form__submit'
          tabIndex={0}
        > Add
        </button>
      </form>
    );
  }

  private _onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    this.props.onSubmit(this._textInput.current.value);
    this._textInput.current.value = '';
  }
}

export default AddItemForm;
