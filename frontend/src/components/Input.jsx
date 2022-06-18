import React from 'react';
import PropTypes from 'prop-types';

export default function Input(props) {
  const {
    label,
    type,
    value,
    id,
    onChange,
    className,
  } = props;
  console.log(value);
  return (
    <label>
      <span>
        { label }
      </span>
      <input
      type={ type }
      value={ value }
      id={ id }
      onChange={ onChange }
      className={ className }
      />
    </label>
  )
}

Input.propType = {
  label: PropTypes.string,
  type: PropTypes.string,
  id: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
  className: PropTypes.string,
}

Input.defaultProps = {
  label: '',
  type: 'text',
  className: '',
  value: '',
  id: '',
}