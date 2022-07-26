import React from 'react';
import { ButtonGroup, IconButton } from '@chakra-ui/react';
import { BsPencilSquare } from 'react-icons/bs';
import { FaRegSave } from 'react-icons/fa';
import { GrRevert } from 'react-icons/gr';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { unCheckCard } from '../../../store/AllCardsSlice';

const CardButton = ({
  isEditing,
  validationOnDiscard,
  validationOnSave,
  editApproved,
  setIsEditing,
  cardId,
}) => {
  const isReadOnly = useSelector((state) => state.allCardsInfo.isReadOnly);
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(unCheckCard(cardId));
  };
  if (isEditing && !isReadOnly) {
    return (
      <>
        <ButtonGroup
          justifyContent="space-around"
          w="full"
          size="lg"
          onClick={handleClick}
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
    );
  } else {
    return (
      <IconButton
        isDisabled={isReadOnly}
        size="lg"
        icon={<BsPencilSquare size="32" />}
        onClick={() => {
          setIsEditing(true);
          handleClick();
        }}
      />
    );
  }
};

CardButton.propTypes = {
  isEditing: PropTypes.bool,
  validationOnDiscard: PropTypes.func.isRequired,
  validationOnSave: PropTypes.func.isRequired,
  editApproved: PropTypes.bool,
  setIsEditing: PropTypes.func.isRequired,
  cardId: PropTypes.string,
};

export default CardButton;
