import React from 'react'
import { Textarea } from '@chakra-ui/react'
import PropTypes from 'prop-types'

const CardBody = ({ body, isEditing, setBody, setRevertBody }) => {
    return (
        <Textarea
            value={body}
            fontSize="xl"
            variant={isEditing ? 'filled' : 'unstyled'}
            onClick={() => setRevertBody(body)}
            isReadOnly={!isEditing}
            onChange={(e) => setBody(e.target.value)}
        />
    )
}

CardBody.propTypes = {
    body: PropTypes.string.isRequired,
    isEditing: PropTypes.bool,
    setBody: PropTypes.func.isRequired,
    setRevertBody: PropTypes.func.isRequired,
}

export default CardBody
