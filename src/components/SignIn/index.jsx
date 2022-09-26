import React, { useState } from 'react';
import validator from 'validator';
import Input from '../Input';
import { StyledButton, StyledForm, ErrorMessage } from './styles';
import { useDispatch } from 'react-redux';
import { setUser } from '../../store/UserSlide';
import { useTranslation } from 'react-i18next';
const SignIn = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const hasNumber = (myString) => {
    return /\d/.test(myString);
  };
  const hasLetters = (myString) => {
    return /[a-z]/.test(myString);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!validator.isEmail(userName.trim())) {
      setErrorMessage(t('errors.usernameError'));
      return;
    }
    if (
      !validator.isLength(password, { min: 8 }) ||
      !hasLetters(password) ||
      !hasNumber(password)
    ) {
      setErrorMessage(t('errors.passwordError'));
      return;
    }
    if (
      userName.trim() === 'testAdmin@gmail.com' &&
      password === '12345yuiopp'
    ) {
      dispatch(setUser({ name: userName, status: true, role: 'admin' }));
    } else {
      dispatch(setUser({ name: userName, status: true, role: 'simple_user' }));
    }
    setErrorMessage('');
  };
  return (
    <StyledForm onSubmit={handleSubmit}>
      <Input
        type="text"
        id="email"
        label={t('header.username')}
        setErrorMessage={setErrorMessage}
        setValue={setUserName}
      />
      <Input
        type="password"
        id="password"
        label={t('header.password')}
        setErrorMessage={setErrorMessage}
        setValue={setPassword}
      />
      <StyledButton type="submit" disabled={errorMessage}>
        {t('header.signIn')}
      </StyledButton>
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </StyledForm>
  );
};

export default SignIn;
