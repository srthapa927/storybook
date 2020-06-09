import React from 'react';
import './button.scss';

const Button = (props) => (
  <button onClick={props.onClick} style={props.style} disabled={props.disabled}>
    {props.label && <span>{props.label}</span>}
  </button>
);

export default Button;
