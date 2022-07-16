import React, { useState, useEffect } from 'react'
import { Box, Spacer } from '@chakra-ui/react'
import { v4 as uuidv4 } from 'uuid'
import PropTypes from 'prop-types'
import CardHeader from './CardHeader'
import CardBody from './CardBody'
import CardButton from './CardButtons'
import withLoadingDelay from '../withLoadingDelay'
import { useDispatch, useSelector } from 'react-redux'
import { addCard, editCard } from '../../store/AllCardsSlice'
import validator from 'validator'
import { useNavigate } from 'react-router-dom'

const Card = ({ data, editing, newCard, onClose }) => {
  const navigate = useNavigate()
  const isReadOnly = useSelector((state) => state.cards.isReadOnly)
  const checkedCards = useSelector((state) => state.cards.checkedCards)
  const dispatch = useDispatch()
  const boxChecked = checkedCards.includes(data.id)
  const [header, setHeader] = useState(data.header)
  const [body, setBody] = useState(data.body)
  const [revertHeader, setRevertHeader] = useState(header)
  const [revertBody, setRevertBody] = useState(body)
  const [isEditing, setIsEditing] = useState(editing)
  const [editApproved, setEditApproved] = useState(true)
  const handleDOubleClick = () => {
    !isEditing && navigate(`/card/${data.id}`)
  }
  useEffect(() => {
    setHeader(revertHeader)
    setBody(revertBody)
    setEditApproved(true)
    isReadOnly && setIsEditing(false)
  }, [isReadOnly])

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
      align="center"
      p="6"
      mb="4"
      w={['xs', 'sm', 'lg']}
      bg={boxChecked ? 'gray.300' : 'gray.100'}
      transition="0.2s linear"
      onDoubleClick={handleDOubleClick}
    >
      <CardHeader
        editApproved={editApproved}
        isEditing={isEditing}
        setHeader={setHeader}
        setEditApproved={setEditApproved}
        header={header}
        cardId={data.id}
      />

      <CardBody
        body={body}
        isEditing={isEditing}
        setBody={setBody}
        setRevertBody={setRevertBody}
      />

      <Spacer h="12" />

      <CardButton
        cardId={data.id}
        isEditing={isEditing}
        validationOnDiscard={validationOnDiscard}
        validationOnSave={validationOnSave}
        editApproved={editApproved}
        setIsEditing={setIsEditing}
      />
    </Box>
  )
}

const CardWithLoadingDelay = withLoadingDelay(Card)

Card.propTypes = {
  data: PropTypes.object,
  editing: PropTypes.bool,
  newCard: PropTypes.bool,
  onClose: PropTypes.func,
}

export default CardWithLoadingDelay
