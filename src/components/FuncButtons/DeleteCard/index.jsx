import React from 'react'
import { Button } from '@chakra-ui/react'
import PropTypes from 'prop-types'

const Delete = ({ setDelClicked, isReadOnly }) => {
    const [delClicked, setDelClickedState] = React.useState(false)
    return (
        <Button
            isDisabled={isReadOnly}
            colorScheme="teal"
            variant="outline"
            onClick={() => {
                setDelClicked(!delClicked)
                setDelClickedState(!delClicked)
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
