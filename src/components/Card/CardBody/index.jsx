import React from 'react';
import { Textarea } from '@chakra-ui/react';
import PropTypes from 'prop-types';

const CardBody = ({ body, isEditing, setBody }) => {
  return (
    <Textarea
      data-testid="cardBody"
      value={body}
      fontSize="xl"
      minH="150px"
      size="xl"
      overflow="hidden"
      variant={isEditing ? 'filled' : 'unstyled'}
      isReadOnly={!isEditing}
      onChange={(e) => setBody(e.target.value)}
    />
  );
};

CardBody.propTypes = {
  body: PropTypes.string.isRequired,
  isEditing: PropTypes.bool,
  setBody: PropTypes.func.isRequired,
};

export default CardBody;
