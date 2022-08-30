import React, { useState, useEffect } from 'react';
import { Box, Spacer } from '@chakra-ui/react';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';
import CardHeader from './CardHeader';
import CardBody from './CardBody';
import CardButton from './CardButtons';
import withLoadingDelay from '../withLoadingDelay';
import { useDispatch, useSelector } from 'react-redux';
import { addCard, editCard } from '../../store/AllCardsSlice';
import validator from 'validator';
import { useNavigate } from 'react-router-dom';
export const Card = ({ data, editing, cardType, onClose }) => {
  const navigate = useNavigate();
  const isReadOnly = useSelector((state) => state.allCardsInfo.isReadOnly);
  const checkedCards = useSelector((state) => state.allCardsInfo.checkedCards);
  const { user } = useSelector((state) => state);
  const dispatch = useDispatch();
  const boxChecked = checkedCards.includes(data.id);
  const [showBtns, setShowBtns] = useState(true);
  const [header, setHeader] = useState(data.header);
  const [body, setBody] = useState(data.body);
  const [revertHeader, setRevertHeader] = useState(header);
  const [revertBody, setRevertBody] = useState(body);
  const [isEditing, setIsEditing] = useState(editing);
  const [editApproved, setEditApproved] = useState(true);
  const handleDoubleClick = () => {
    !isEditing && navigate(`/card/${data.id}`);
  };
  useEffect(() => {
    setHeader(revertHeader);
    setBody(revertBody);
    setEditApproved(true);
    isReadOnly && setIsEditing(false);
  }, [isReadOnly]);

  useEffect(() => {
    switch (cardType) {
      case 'newCard':
        setIsEditing(true);
        break;
      case 'previewCard':
        user.role === 'simple_user' && setIsEditing(false);
        setShowBtns(false);
        break;
    }
  }, []);

  const validationOnDiscard = () => {
    switch (cardType) {
      case 'newCard':
        onClose();
        break;
      default:
        setShowBtns(true);
        break;
    }
    setHeader(revertHeader);
    setBody(revertBody);
    setEditApproved(true);
    setIsEditing(false);
  };

  const validationOnSave = () => {
    if (validator.isEmpty(header, { ignore_whitespace: true })) {
      setIsEditing(true);
      setEditApproved(false);
    } else {
      switch (cardType) {
        case 'newCard':
          const createdCard = {
            body,
            header,
            id: uuidv4(),
          };
          dispatch(addCard(createdCard));
          onClose();
          break;
        default:
          dispatch(
            editCard({
              id: data.id,
              header,
              body,
            })
          );
          navigate('/');
          break;
      }
      setRevertHeader(header);
      setRevertBody(body);
      setIsEditing(false);
      setEditApproved(true);
    }
  };

  return (
    <Box
      data-testid="card"
      boxShadow="base"
      align="center"
      p="6"
      mb="4"
      w={['xs', 'sm', 'lg']}
      bg={boxChecked ? 'gray.300' : 'gray.100'}
      transition="0.2s linear"
      onDoubleClick={handleDoubleClick}
    >
      <CardHeader
        showBtns={showBtns}
        editApproved={editApproved}
        isEditing={isEditing}
        setHeader={setHeader}
        setEditApproved={setEditApproved}
        header={header}
        cardId={data.id}
        boxChecked={boxChecked}
      />

      <CardBody
        body={body}
        isEditing={isEditing}
        setBody={setBody}
      />

      <Spacer h="12" />
      {cardType === 'previewCard' && user.role === 'simple_user' ? null : (
        <CardButton
          data-testid="cardButtons"
          cardId={data.id}
          isEditing={isEditing}
          validationOnDiscard={validationOnDiscard}
          validationOnSave={validationOnSave}
          editApproved={editApproved}
          setIsEditing={setIsEditing}
        />
      )}
    </Box>
  );
};
const CardWithLoadingDelay = withLoadingDelay(Card);

Card.propTypes = {
  data: PropTypes.object,
  editing: PropTypes.bool,
  cardType: PropTypes.string,
  onClose: PropTypes.func,
};

export default CardWithLoadingDelay;
