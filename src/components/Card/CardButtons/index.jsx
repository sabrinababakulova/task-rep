import React from 'react'
import { ButtonGroup, IconButton } from '@chakra-ui/react'
import { BsPencilSquare } from 'react-icons/bs'
import { FaRegSave } from 'react-icons/fa'
import { GrRevert } from 'react-icons/gr'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'

const CardButton = ({
    isEditing,
    setBoxChecked,
    validationOnDiscard,
    validationOnSave,
    editApproved,
    setIsEditing,
}) => {
    const isReadOnly = useSelector((state) => state.cards.isReadOnly)
    if (isEditing && !isReadOnly) {
        return (
            <>
                <ButtonGroup
                    justifyContent="space-around"
                    w="full"
                    size="lg"
                    onClick={() => setBoxChecked(false)}
                >
                    <IconButton
                        icon={<GrRevert size="32" />}
                        onClick={validationOnDiscard}
                    />
                    <IconButton
                        isDisabled={!editApproved}
                        icon={<FaRegSave size="32" />}
                        onClick={validationOnSave}
                    />
                </ButtonGroup>
            </>
        )
    } else {
        return (
            <IconButton
                isDisabled={isReadOnly}
                size="lg"
                icon={<BsPencilSquare size="32" />}
                onClick={() => {
                    setIsEditing(true)
                    setBoxChecked(false)
                }}
            />
        )
    }
}

CardButton.propTypes = {
    isEditing: PropTypes.bool,
    setBoxChecked: PropTypes.func,
    validationOnDiscard: PropTypes.func.isRequired,
    validationOnSave: PropTypes.func.isRequired,
    editApproved: PropTypes.bool,
    setIsEditing: PropTypes.func.isRequired,
}

export default CardButton
