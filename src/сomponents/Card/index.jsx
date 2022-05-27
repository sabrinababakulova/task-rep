import React, { useState, useEffect } from 'react'
import { Box, Spacer } from '@chakra-ui/react'
import { v4 as uuidv4 } from 'uuid'

import CardHeader from './CardHeader'
import CardBody from './CardBody'
import CardButton from './CardButton'

const Card = ({
    readOnly,
    data,
    delClicked,
    editing,
    newCard,
    onClose,
    setAddClicked,
}) => {
    const [header, setHeader] = useState(data.header)
    const [body, setBody] = useState(data.body)
    const [revertHeader, setRevertHeader] = useState(header)
    const [revertBody, setRevertBody] = useState(body)
    const [boxChecked, setBoxChecked] = useState(false)
    const [isEditing, setIsEditing] = useState(editing)
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
        setEditApproved(true)
        if (readOnly) {
            setIsEditing(false)
        }
    }, [readOnly])

    const validationOnDiscard = () => {
        if (newCard) {
            onClose()
        }
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
            if (newCard) {
                setAddClicked(true, {
                    id: uuidv4(),
                    header: header,
                    body: body,
                })
                onClose()
            }
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
                boxChecked={boxChecked}
                setBoxChecked={(boxChecked) => setBoxChecked(boxChecked)}
            />

            <CardBody
                body={body}
                isEditing={isEditing}
                setBody={(body) => setBody(body)}
                setRevertBody={(body) => setRevertBody(body)}
            />

            <Spacer h="12" />

            <CardButton
                isEditing={isEditing}
                isReadOnly={isReadOnly}
                setBoxChecked={(boxChecked) => setBoxChecked(boxChecked)}
                validationOnDiscard={validationOnDiscard}
                validationOnSave={validationOnSave}
                editApproved={editApproved}
                readOnly={readOnly}
                setIsEditing={(isEditing) => setIsEditing(isEditing)}
            />
        </Box>
    )
}

export default Card
