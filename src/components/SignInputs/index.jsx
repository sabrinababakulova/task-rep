import React, { useState } from 'react'
import styled from 'styled-components'
import validator from 'validator'

const StyledInput = styled.input`
    border-radius: 10px;
    border: 1px solid teal;
    padding: 10px;
    margin: 10px;
    width: 100%;
`

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid teal;
    margin: 10px;
    padding: 25px;
    border-radius: 15px;
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

const SignInputs = () => {
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [errorExist, setErrorExist] = useState(false)
    const hasNumber = (myString) => {
        return /\d/.test(myString)
    }
    const hasLetters = (myString) => {
        return /[a-z]/.test(myString)
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        if (
            validator.isEmail(userName) &&
            validator.isLength(password, { min: 8, max: 16 }) &&
            hasLetters(password) &&
            hasNumber(password)
        ) {
            alert('Successfully signed in!')
            setErrorExist(false)
        } else {
            setErrorExist(true)
        }
    }
    return (
        <StyledForm onSubmit={handleSubmit}>
            <label htmlFor="user-name">User name</label>
            <StyledInput
                type="text"
                id="email"
                onChange={(e) => {
                    setUserName(e.target.value)
                    setErrorExist(false)
                }}
            />
            <label htmlFor="user-name">Password</label>
            <StyledInput
                type="text"
                id="password"
                onChange={(e) => {
                    setPassword(e.target.value)
                    setErrorExist(false)
                }}
            />
            <StyledButton type="submit" disabled={errorExist}>
                Sign in
            </StyledButton>
        </StyledForm>
    )
}

export default SignInputs
