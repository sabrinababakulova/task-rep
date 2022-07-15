import React, { useState, useEffect } from 'react'
import { Box, Spacer } from '@chakra-ui/react'
import { v4 as uuidv4 } from 'uuid'
import PropTypes from 'prop-types'
import CardHeader from './CardHeader'
import CardBody from './CardBody'
import CardButton from './CardButtons'
import withLoadingDelay from '../withLoadingDelay'
import { useSelector, useDispatch } from 'react-redux'
import { checkCard, addCard, editCard } from '../../store/AllCardsSlice'
import validator from 'validator'
const Card = ({ readOnly, data, editing, newCard, onClose }) => {
    const dispatch = useDispatch()
    const [header, setHeader] = useState(data.header)
    const [body, setBody] = useState(data.body)
    const [revertHeader, setRevertHeader] = useState(header)
    const [revertBody, setRevertBody] = useState(body)
    const [boxChecked, setBoxChecked] = useState(false)
    const [isEditing, setIsEditing] = useState(editing)
    const [editApproved, setEditApproved] = useState(true)
    const [isReadOnly, setIsReadOnly] = useState(readOnly)
    useEffect(() => {
        if (!newCard) {
            const checkedCard = { checked: boxChecked, card: data.id }
            dispatch(checkCard(checkedCard))
        }
    }, [boxChecked])

    useEffect(() => {
        setHeader(revertHeader)
        setBody(revertBody)
        setIsReadOnly(readOnly)
        setEditApproved(true)
        readOnly && setIsEditing(false)
    }, [readOnly])

    const validationOnDiscard = () => {
        newCard && onClose()
        setHeader(revertHeader)
        setBody(revertBody)
        setEditApproved(true)
        setIsEditing(false)
    }

    const validationOnSave = () => {
        if (validator.isEmpty(header, { ignore_whitespace: true })) {
            setIsEditing(true)
            setEditApproved(false)
        } else {
            if (newCard) {
                const createdCard = {
                    body: body,
                    header: header,
                    id: uuidv4(),
                }
                dispatch(addCard(createdCard))
                onClose()
            }
            setRevertHeader(header)
            setRevertBody(body)
            setIsEditing(false)
            setEditApproved(true)
            dispatch(
                editCard({
                    id: data.id,
                    header: header,
                    body: body,
                })
            )
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
