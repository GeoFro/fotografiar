import React, { Component } from 'react';
import Header from './Header';
import Button from './Button';
import CollectionRenameForm from './CollectionRenameForm';
import CollectionExportForm from './CollectionExportForm';

class CollectionControls extends Component {
  state = {
    name: 'name',
    isEditingName: false
  };

  // Generates slightly different text to account for grammar.
  // If only one tweet, it uses the singular. More than 1, then it uses plural.
  // This function is used to create text for the <Header> component.
  getHeaderText = () => {
    const { name } = this.state;
    const { numberOfTweetsInCollection } = this.props;
    let text = numberOfTweetsInCollection;

    if (numberOfTweetsInCollection === 1) {
      text = `${tweet} tweet in your`;
    } else {
      text = `${tweet} tweets in your`
    }

    return (
      <span>
        {text} <strong>{name}</strong> collection
      </span>
    );
  }

  // Simple toggle function. The state is changed to whatever the state currently is not.
  // If the state is true, it will change it to false and vice versa.
  toggleEditCollectionName = () => {
    this.setState(prevState => ({
      isEditingName: !prevState.isEditingName
    }));
  }

  // setCollectionName function sets the name and changes the isEditingName state to false.
  // This change in state causes the form to be hidden.
  setCollectionName = (name) => {
    this.setState({
      name,
      isEditingName: false
    });
  }

  render() {
    const { name, isEditingName } = this.state;
    const {
      onRemoveAllTweetsFromCollection,
      htmlMarkup
    } = this.props;

    // If we are editing the name, show the form to edit the name, if not, don't.
    if (isEditingName) {
      return (
        // CollectionRenameForm receives 3 properties from CollectionControls
        // The name, which the name of the current collection
        // and the onChangeCollectionName and onCancelCollectionNameChange properties
        // which reference the component's methods defined above.
        <CollectionRenameForm
          name={name}
          onChangeCollectionName={this.setCollectionName}
          onCancelCollectionNameChange={this.toggleEditCollectionName}
        />
      );
    }

    // Returns the collection controls to the user if isEditingName is false.

    // The Header component receives a text property that references a string.
    // In this case it gets this via the getHeaderText function defined above.
    // The string is generated slightly differently depending on the number of tweets
    // in the collection.

    // The first <Button> component is rendered with the toggleEditCollectionName method
    // added to it's handleClick property.
    // Clicking the button will call the toggleEditCollectionName method.

    // The second <Button> component is used to empty the current collection of tweets
    return (
      <div>
        <Header text={this.getHeaderText()} />

        <Button
          label="Rename collection"
          handleClick={this.toggleEditCollectionName}
        />

        <Button
          label="Empty collection"
          handleClick={onRemoveAllTweetsFromCollection}
        />

        <CollectionExportForm htmlMarkup={htmlMarkup} />
      </div>
    );
  }
}
export defaultCollectionControls;
