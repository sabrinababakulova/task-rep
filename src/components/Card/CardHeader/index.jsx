import React from 'react'
import {
    Flex,
    Checkbox,
    FormControl,
    Input,
    Divider,
    FormErrorMessage,
} from '@chakra-ui/react'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'
import { checkCard, unCheckCard } from '../../../store/AllCardsSlice'

const CardHeader = ({
    editApproved,
    isEditing,
    setHeader,
    setEditApproved,
    header,
    cardId,
}) => {
    const dispatch = useDispatch()
    const handleChange = (isChecked) => {
        isChecked ? dispatch(checkCard(cardId)) : dispatch(unCheckCard(cardId))
    }
    return (
        <>
            <Flex justifyContent="space-between">
                <FormControl
                    isInvalid={!editApproved}
                    onChange={() => setEditApproved(true)}
                >
                    <Input
                        variant={isEditing ? 'filled' : 'unstyled'}
                        fontSize="2xl"
                        isReadOnly={!isEditing}
                        value={header}
                        onChange={(e) => setHeader(e.target.value)}
                    />
                    {!editApproved && (
                        <FormErrorMessage>
                            Header should not be empty
                        </FormErrorMessage>
                    )}
                </FormControl>
                {!isEditing && (
                    <Checkbox
                        onChange={(e) => {
                            handleChange(e.target.checked)
                        }}
                        colorScheme="green"
                        borderColor="gray.500"
                    />
                )}
            </Flex>

            <Divider h={2} />
        </>
    )
}

CardHeader.propTypes = {
    editApproved: PropTypes.bool,
    isEditing: PropTypes.bool,
    setHeader: PropTypes.func.isRequired,
    setEditApproved: PropTypes.func.isRequired,
    header: PropTypes.string.isRequired,
    cardId: PropTypes.string.isRequired,
}

export default CardHeader
