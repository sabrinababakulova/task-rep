import React from 'react';
import PropTypes from 'prop-types';
import { StyledInput } from './styles';
const Input = ({ type, id, label, setErrorMessage, setValue }) => {
  return (
    <div>
      <label htmlFor={label}>{label}</label>
      <StyledInput
        type={type}
        id={id}
        onChange={(e) => {
          setValue(e.target.value);
          setErrorMessage('');
        }}
      />
    </div>
  );
};

Input.propTypes = {
  type: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string,
  setErrorMessage: PropTypes.func,
  setValue: PropTypes.func,
};
export default Input;
