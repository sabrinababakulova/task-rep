import React from 'react';
import { Button } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { removeCard } from '../../../store/AllCardsSlice';

const Delete = () => {
  const isReadOnly = useSelector((state) => state.allCardsInfo.isReadOnly);
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(removeCard());
  };
  return (
    <Button
      isDisabled={isReadOnly}
      colorScheme="teal"
      variant="outline"
      onClick={handleClick}
    >
      Delete
    </Button>
  );
};

export default Delete;
