import React from 'react';

const buttonStyle = {
  margin: "10px 0"
};

// Notice that a class definition isn't required.
// The button takes input in the form of props and returns JSX as the output.
// It is possible to define <Button> like this because it doens't have state.

// The <Button> component expects to receive two properties from its parent component.
// The first a label which will be the text that is shown on the button.
// The second the handleClick property which is a callback function that is called
// when a user clicks on the button.

const Button = ({ label, handleClick }) => (
  <button
    className="btn btn-default"
    style={buttonStyle}
    onClick={handleClick}
  >
    {label}
  </button>
);

export default Button;
