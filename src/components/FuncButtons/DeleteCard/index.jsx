import React from 'react'
import { Button } from '@chakra-ui/react'

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

export default Delete
