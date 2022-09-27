import React from 'react';
import { Button } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { removeCard } from '../../../store/AllCardsSlice';
import { useTranslation } from 'react-i18next';
const Delete = () => {
  const { t } = useTranslation();
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
      {t('buttons.delete')}
    </Button>
  );
};

export default Delete;
