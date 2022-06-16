import React, {useEffect, useState} from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
const StyledInput = styled.input`
    border-radius: 10px;
    border: 1px solid teal;
    padding: 10px;
    margin: 10px;
    width: 20rem;
`

const Input = ({type, id, label, setErrorExist, setValue}) => {


  return (
    <div>
         <label htmlFor={label}>{label}</label>
            <StyledInput
                type={type}
                id={id}
                onChange={(e) => {
                    setValue(e.target.value)
                    setErrorExist(false)
                }}
            />
    </div>
  )
}

Input.propTypes = {
    type: PropTypes.string,
    id: PropTypes.string,
    label: PropTypes.string,
    setErrorExist: PropTypes.func,
    setValue: PropTypes.func
}
export default Input