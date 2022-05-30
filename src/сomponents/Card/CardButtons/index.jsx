import React from 'react'
import { ButtonGroup, IconButton } from '@chakra-ui/react'
import { BsPencilSquare } from 'react-icons/bs'
import { FaRegSave } from 'react-icons/fa'
import { GrRevert } from 'react-icons/gr'

const CardButton = ({
    isEditing,
    isReadOnly,
    setBoxChecked,
    validationOnDiscard,
    validationOnSave,
    editApproved,
    readOnly,
    setIsEditing,
}) => {
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
                isDisabled={readOnly}
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
export default CardButton
