import React from 'react'
import { Checkbox, LabelStyled } from '../Styles/CheckBoxStyled'
import { useDispatch, useSelector } from 'react-redux'
import { setIsReadOnly } from '../../../store/AllCardsSlice'

const ReadOnly = () => {
    const isReadOnly = useSelector((state) => state.cards.isReadOnly)
    const dispatch = useDispatch()
    const handleClick = () => {
        dispatch(setIsReadOnly())
    }
    return (
        <LabelStyled>
            <Checkbox checked={isReadOnly} onChange={handleClick} />
            <span>Read Only</span>
        </LabelStyled>
    )
}

export default ReadOnly
