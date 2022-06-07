import React, { useState, useEffect } from 'react'
import { Box, Spacer } from '@chakra-ui/react'
import { v4 as uuidv4 } from 'uuid'
import PropTypes from 'prop-types'
import CardHeader from './CardHeader'
import CardBody from './CardBody'
import CardButton from './CardButtons'
import withLoadingDelay from '../withLoadingDelay'
import { useCardData } from '../../contextProvider'
const Card = ({ readOnly, data, editing, newCard, onClose }) => {
    const [header, setHeader] = useState(data.header)
    const [body, setBody] = useState(data.body)
    const [revertHeader, setRevertHeader] = useState(header)
    const [revertBody, setRevertBody] = useState(body)
    const [boxChecked, setBoxChecked] = useState(false)
    const [isEditing, setIsEditing] = useState(editing)
    const [editApproved, setEditApproved] = useState(true)
    const [isReadOnly, setIsReadOnly] = useState(readOnly)
    const { setCheckedCard, addCard } = useCardData()
    useEffect(() => {
        if (!newCard) {
            const checkedCard = { checked: boxChecked, card: data.id }
            setCheckedCard(checkedCard)
        }
    }, [boxChecked])

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
                const createdCard = {
                    id: uuidv4(),
                    header: header,
                    body: body,
                }
                addCard(createdCard)
                onClose()
            }
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
            bg={boxChecked ? 'gray.300' : 'gray.50'}
            transition="0.2s linear"
        >
            <CardHeader
                editApproved={editApproved}
                isEditing={isEditing}
                setHeader={setHeader}
                setEditApproved={setEditApproved}
                header={header}
                boxChecked={boxChecked}
                setBoxChecked={setBoxChecked}
            />

            <CardBody
                body={body}
                isEditing={isEditing}
                setBody={setBody}
                setRevertBody={setRevertBody}
            />

            <Spacer h="12" />

            <CardButton
                isEditing={isEditing}
                isReadOnly={isReadOnly}
                setBoxChecked={setBoxChecked}
                validationOnDiscard={validationOnDiscard}
                validationOnSave={validationOnSave}
                editApproved={editApproved}
                readOnly={readOnly}
                setIsEditing={setIsEditing}
            />
        </Box>
    )
}

const CardWithLoadingDelay = withLoadingDelay(Card)

Card.propTypes = {
    readOnly: PropTypes.bool,
    data: PropTypes.object,
    editing: PropTypes.bool,
    newCard: PropTypes.bool,
    onClose: PropTypes.func,
}

export default CardWithLoadingDelay
