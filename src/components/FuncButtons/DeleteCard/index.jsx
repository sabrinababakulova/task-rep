import React from 'react'
import { Button } from '@chakra-ui/react'
import PropTypes from 'prop-types'

const Delete = ({ setDelClicked, isReadOnly }) => {
    return (
        <Button
            isDisabled={isReadOnly}
            colorScheme="teal"
            variant="outline"
            onClick={() => {
                setDelClicked(true)
            }}
        >
            Delete
        </Button>
    )
}

Delete.propTypes = {
    setDelClicked: PropTypes.func.isRequired,
    isReadOnly: PropTypes.bool,
}

export default Delete
