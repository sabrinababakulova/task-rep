import React, { useState } from 'react';
import validator from 'validator';
import Input from '../Input';
import { useNavigate } from 'react-router-dom';
import { StyledButton, StyledForm , ErrorMessage } from './styles';

const SignIn = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const UserNameError = 'Please make sure that your user name is your email';
  const PasswordError =
    'Please make sure that the password is at least 8 characters long, and contains at least one number and one letter.';

  const hasNumber = (myString) => {
    return /\d/.test(myString);
  };
  const hasLetters = (myString) => {
    return /[a-z]/.test(myString);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!validator.isEmail(userName)) {
      setErrorMessage(UserNameError);
      return;
    }
    if (
      !validator.isLength(password, { min: 8 }) ||
      !hasLetters(password) ||
      !hasNumber(password)
    ) {
      setErrorMessage(PasswordError);
      return;
    }
    navigate('/');
    setErrorMessage('');
  };
  return (
    <StyledForm onSubmit={handleSubmit}>
      <Input
        type="text"
        id="email"
        label="User name"
        setErrorMessage={setErrorMessage}
        setValue={setUserName}
      />
      <Input
        type="password"
        id="password"
        label="PassWord"
        setErrorMessage={setErrorMessage}
        setValue={setPassword}
      />
      <StyledButton type="submit" disabled={errorMessage}>
        Sign in
      </StyledButton>
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </StyledForm>
  );
};

export default SignIn;
