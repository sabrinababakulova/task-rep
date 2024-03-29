import React from 'react';
import {
  Flex,
  FormControl,
  Input,
  Divider,
  FormErrorMessage,
} from '@chakra-ui/react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { checkCard, unCheckCard } from '../../../store/AllCardsSlice';
import { Checkbox, LabelStyled } from '../../FuncButtons/Styles/CheckBoxStyled';
import { useTranslation } from 'react-i18next';
const CardHeader = ({
  editApproved,
  isEditing,
  setHeader,
  setEditApproved,
  header,
  cardId,
  showBtns,
  boxChecked,
}) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const handleChange = ({ target }) => {
    target.checked
      ? dispatch(checkCard(cardId))
      : dispatch(unCheckCard(cardId));
  };
  return (
    <>
      <Flex justifyContent="space-between">
        <FormControl
          isInvalid={!editApproved}
          onChange={() => setEditApproved(true)}
        >
          <Input
            data-testid="cardHeader"
            variant={isEditing ? 'filled' : 'unstyled'}
            fontSize="2xl"
            isReadOnly={!isEditing}
            value={header}
            onChange={(e) => setHeader(e.target.value)}
          />
          {!editApproved && (
            <FormErrorMessage>{t('errors.notEmpty')}</FormErrorMessage>
          )}
        </FormControl>
        {showBtns && !isEditing ? (
          <LabelStyled>
            <Checkbox checked={boxChecked} onChange={handleChange} />
          </LabelStyled>
        ) : null}
      </Flex>

      <Divider h={2} />
    </>
  );
};

CardHeader.propTypes = {
  editApproved: PropTypes.bool,
  isEditing: PropTypes.bool,
  setHeader: PropTypes.func.isRequired,
  setEditApproved: PropTypes.func.isRequired,
  header: PropTypes.string.isRequired,
  cardId: PropTypes.string,
  showBtns: PropTypes.bool,
  boxChecked: PropTypes.bool,
};

export default CardHeader;
