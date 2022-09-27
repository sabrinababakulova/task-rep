import React from 'react';
import { Checkbox, LabelStyled } from '../Styles/CheckBoxStyled';
import { useDispatch, useSelector } from 'react-redux';
import { setIsReadOnly } from '../../../store/AllCardsSlice';
import { useTranslation } from 'react-i18next';
const ReadOnly = () => {
  const isReadOnly = useSelector((state) => state.allCardsInfo.isReadOnly);
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(setIsReadOnly());
  };
  const { t } = useTranslation();
  return (
    <LabelStyled>
      <Checkbox checked={isReadOnly} onChange={handleClick} />
      <span>{t('buttons.readOnly')}</span>
    </LabelStyled>
  );
};

export default ReadOnly;
