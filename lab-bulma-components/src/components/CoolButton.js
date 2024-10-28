import React from 'react';

function CoolButton(props) {
  // Define the base button classes
  let classes = 'button';

  // Add additional classes based on props
  if (props.isSuccess) {
    classes += ' is-success';
  }

  return (
    <button className={classes}>
      {props.children}
    </button>
  );
}

export default CoolButton;