import React, { useState } from 'react'
import styled from 'styled-components'
import validator from 'validator'
import Input from '../Input'

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid teal;
  margin: 10px;
  padding: 25px;
  border-radius: 15px;
`
const ErrorMessage = styled.p`
  margin-top: 15px;
  color: red;
  width: 20rem;
`

const StyledButton = styled.button`
  border-radius: 10px;
  padding: 10px;
  border: 2px solid teal;
  ${(props) =>
    props.disabled &&
    `
        border-color: red;
        cursor: not-allowed;
  `}
`

const SignIn = () => {
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [errorExist, setErrorExist] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const UserNameError = 'Please make sure that your user name is your email'
  const PasswordError =
    'Please make sure that the password is at least 8 characters long, and contains at least one number and one letter.'

  const hasNumber = (myString) => {
    return /\d/.test(myString)
  }
  const hasLetters = (myString) => {
    return /[a-z]/.test(myString)
  }
  const handleSubmit = (event) => {
    event.preventDefault()
    if (!validator.isEmail(userName)) {
      setErrorMessage(UserNameError)
      setErrorExist(true)
      return
    }
    if (
      !validator.isLength(password, { min: 8 }) ||
      !hasLetters(password) ||
      !hasNumber(password)
    ) {
      setErrorMessage(PasswordError)
      setErrorExist(true)
      return
    }
    alert('Successfully signed in!')
    setErrorExist(false)
  }
  return (
    <StyledForm onSubmit={handleSubmit}>
      <Input
        type="text"
        id="email"
        label="User name"
        setErrorExist={setErrorExist}
        setValue={setUserName}
      />
      <Input
        type="password"
        id="password"
        label="PassWord"
        setErrorExist={setErrorExist}
        setValue={setPassword}
      />
      <StyledButton type="submit" disabled={errorExist}>
        Sign in
      </StyledButton>
      {errorExist && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </StyledForm>
  )
}

export default SignIn
