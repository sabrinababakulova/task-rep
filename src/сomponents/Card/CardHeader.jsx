import React from 'react'
import {
    Flex,
    Checkbox,
    FormControl,
    Input,
    Divider,
    FormErrorMessage,
} from '@chakra-ui/react'

const CardHeader = ({
    editApproved,
    isEditing,
    setHeader,
    setEditApproved,
    header,
    setBoxChecked,
    boxChecked,
}) => {
    return (
        <>
            <Flex justifyContent="space-between">
                <FormControl
                    isInvalid={!editApproved}
                    onChange={() => setEditApproved(true)}
                >
                    <Input
                        placeholder="Enter your header here"
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
                <Checkbox
                    hidden={isEditing}
                    isChecked={boxChecked}
                    onChange={(e) => {
                        setBoxChecked(e.target.checked)
                    }}
                    colorScheme="green"
                    borderColor="gray.500"
                ></Checkbox>
            </Flex>

            <Divider h={2} />
        </>
    )
}

export default CardHeader
