import React, { useState, useEffect } from 'react'
import { Box, IconButton, ButtonGroup, Spacer } from '@chakra-ui/react'
import { BsPencilSquare } from 'react-icons/bs'
import { FaRegSave } from 'react-icons/fa'
import { GrRevert } from 'react-icons/gr'
import CardHeader from './CardHeader'
import CardBody from './CardBody'

const Card = ({ readOnly, data, delClicked }) => {
    const [header, setHeader] = useState(data.title)
    const [body, setBody] = useState(data.description)
    const [revertHeader, setRevertHeader] = useState(header)
    const [revertBody, setRevertBody] = useState(body)
    const [boxChecked, setBoxChecked] = useState(false)
    const [isEditing, setIsEditing] = useState(false)
    const [editApproved, setEditApproved] = useState(true)
    const [isReadOnly, setIsReadOnly] = useState(readOnly)
    const [toDelete, setToDelete] = useState(false)

    useEffect(() => {
        if (boxChecked && !isReadOnly) {
            setToDelete(true)
        }
    }, [delClicked])

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
    if (boxChecked && toDelete) {
        return null
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
            <CardHeader
                editApproved={editApproved}
                isEditing={isEditing}
                setHeader={(header) => setHeader(header)}
                setEditApproved={(editApproved) =>
                    setEditApproved(editApproved)
                }
                header={header}
                setBoxChecked={(boxChecked) => setBoxChecked(boxChecked)}
            />

            <CardBody
                body={body}
                isEditing={isEditing}
                setBody={(body) => setBody(body)}
                setRevertBody={(body) => setRevertBody(body)}
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
