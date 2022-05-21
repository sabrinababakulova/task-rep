import React, { useState, useEffect } from 'react'
import {
    Flex,
    Box,
    Divider,
    Checkbox,
    IconButton,
    ButtonGroup,
    Spacer,
    Textarea,
    FormErrorMessage,
    Input,
    FormControl,
} from '@chakra-ui/react'
import { BsPencilSquare } from 'react-icons/bs'
import { FaRegSave } from 'react-icons/fa'
import { GrRevert } from 'react-icons/gr'

const Card = ({ readOnly, data }) => {
    const [header, setHeader] = useState(data.header)
    const [body, setBody] = useState(data.body)
    const [revertHeader, setRevertHeader] = useState(header)
    const [revertBody, setRevertBody] = useState(body)
    const [boxChecked, setBoxChecked] = useState(false)
    const [isEditing, setIsEditing] = useState(false)
    const [editApproved, setEditApproved] = useState(true)
    const [isReadOnly, setIsReadOnly] = useState(readOnly)
    useEffect(() => {
        setHeader(revertHeader)
        setBody(revertBody)
        setIsReadOnly(readOnly)
        setIsEditing(false)
        setEditApproved(true)
    }, [readOnly])

    const validationOnDiscard = () => {
        setHeader(revertHeader)
        setBody(revertBody)
        setEditApproved(true)
        setIsEditing(false)
    }

    const validationOnSave = () => {
        //trimming to get rid of spaces
        const isEmpty = (str) => !str.trim().length

        if (isEmpty(header)) {
            setIsEditing(true)
            setEditApproved(false)
        } else {
            setRevertHeader(header)
            setRevertBody(body)
            setIsEditing(false)
            setEditApproved(true)
        }
    }

    return (
        <Box
            boxShadow="base"
            p="6"
            mb="4"
            w={['xs', 'sm', 'lg']}
            bg={boxChecked ? 'gray.300' : 'gray.100'}
            transition="0.2s linear"
        >
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
                <Checkbox
                    hidden={isEditing}
                    onChange={() => setBoxChecked(!boxChecked)}
                    colorScheme="green"
                    borderColor="gray.500"
                    isChecked={boxChecked}
                ></Checkbox>
            </Flex>
            <Divider h={2} />
            <Textarea
                value={body}
                fontSize="xl"
                variant={isEditing ? 'outline' : 'unstyled'}
                onClick={() => setRevertBody(body)}
                isReadOnly={!isEditing}
                onChange={(e) => setBody(e.target.value)}
            />
            <Spacer h="16" />
            {isEditing && !isReadOnly ? (
                <ButtonGroup
                    justifyContent="space-around"
                    w="full"
                    size="lg"
                    onClick={() => setBoxChecked(false)}
                >
                    <IconButton
                        icon={<GrRevert size="32" />}
                        onClick={() => validationOnDiscard()}
                    />
                    <IconButton
                        isDisabled={!editApproved}
                        icon={<FaRegSave size="32" />}
                        onClick={() => validationOnSave()}
                    />
                </ButtonGroup>
            ) : (
                <IconButton
                    isDisabled={isReadOnly}
                    size="lg"
                    icon={<BsPencilSquare size="32" />}
                    onClick={() => {
                        setIsEditing(true)
                        setBoxChecked(false)
                    }}
                />
            )}
        </Box>
    )
}

export default Card
