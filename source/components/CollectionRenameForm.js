import React, { Component } from 'react';
import Header from './Header';
import Button from './Button';

const inputStyle = {
  marginRight: "5px"
};

class CollectionRenameForm extends Component {
  // The initial value of inputValue is { name } which is the default name of the collection.
  // This is inherited from Collection.
  // { name } by default should be "new".
  // That is of course unless it has been changed previously.
  constructor(props) {
    super(props);

    const { name } = props;

    this.state = {
      inputValue: name
    };
  }

  // This function updates the state of the component, specifically, the inputValue.
  setInputValue = (inputValue) => {
    this.setState({
      inputValue
    });
  }

  // The value of the <input> is controlled by the component not the user.
  // The user can type something in but that won't actually change the value unless we have
  // a function that allows for that.
  // This function handles changes the user makes by entering something into the input
  // and changes the value.
  // The function takes an event with a target property. It takes the value of this target property
  // and sets that at the inputValue via the setInputValue method we previously defined.
  // In this way we allow the value of the input to be changed by the user.
  handleInputValueChange = (event) => {
    const inputValue = event.target.value;
    this.setInputValue(inputValue);
  }

  // Cancel the default form submit event
  // Instead we call the onChangeCollectionName function with collectionName as the argument.
  // This changes our collection's name.
  handleFormSubmit = (event) => {
    event.preventDefault();

    const { onChangeCollectionName } = this.props;
    const { inputValue: collectionName } = this.state;

    onChangeCollectionName(collectionName);
  }

  // Once again cancel the default submit event
  // Get the original collectionName that is passed as a property by a parent CollectionControls component.
  // Then pass collectionName to setInputValue function.
  // Then call onCancelCollectionNameChange function that hides the collection buttons.
  handleFormCancel = (event) => {
    event.preventDefault();

    const {
      name: collectionName,
      onCancelCollectionNameChange
    } = this.props;

    this.setInputValue(collectionName);
    onCancelCollectionNameChange();
  }

  // Once the component is mounted (the form renders)
  // we set the focus to be the input field so the user can
  // simply type in the new name they wish to give their collection.
  // We are able to reference this DOM element because we gave it a ref property (see below)
  // Our ref property assigned a reference to the DOM input element to this.collectionNameInput
  // This allows us to select the input with this.collectionNameInput
  componentDidMount() {
    this.collectionNameInput.focus();
  }

  render() {
    const { inputValue } = this.state;

    // Form to change the collection name.
    // The value property is set to the the current value stored in the component's
    // state. (this.state.inputValue)
    // The ref property is a special react property that can be attached to any component.
    // ref takes a callback function which will execute immediately after the component is mounted and unmounted.
    // It allows us to access the DOM input element that our React component renders.
    return (
      <form className="form-inline" onSubmit={this.handleFormSubmit}>

        <Header text="Collection Name:" />
        <div className="form-group">
          <input
            className="form-control"
            style={inputStyle}
            onChange={this.handleInputValueChange}
            value={inputValue}
            ref={input => { this.collectionNameInput = input; }}
          />
        </div>

        <Button
          label="Change"
          handleClick={this.handleFormSubmit}
        />

        <Button
          label="Cancel"
          handleClick={this.handleFormCancel}
        />

      </form>
    );
  }
}

export default CollectionRenameForm;
