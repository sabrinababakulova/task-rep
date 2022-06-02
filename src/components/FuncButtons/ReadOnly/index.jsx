import React, { useState } from 'react'
import { Checkbox, LabelStyled } from '../Styles/CheckBoxStyled'
import PropTypes from 'prop-types';

const ReadOnly = ({ setReadOnly }) => {
    const [isReadOnly, setIsReadOnly] = useState(false)
    return (
        <LabelStyled>
            <Checkbox
                checked={isReadOnly}
                onChange={() => {
                    setReadOnly(!isReadOnly)
                    setIsReadOnly(!isReadOnly)
                }}
            />
            <span>Read Only</span>
        </LabelStyled>
    )
}

ReadOnly.propTypes={
    setReadOnly: PropTypes.func
}

export default ReadOnly
