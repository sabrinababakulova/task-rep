import React, { useState } from 'react'
import { Button } from '@chakra-ui/react'

const Delete = ({ setDelClicked, isReadOnly }) => {
    const [isDelClicked, setIsDelClicked] = useState(false)
    return (
        <Button
            isDisabled={isReadOnly}
            colorScheme="teal"
            variant="outline"
            onClick={() => {
                setIsDelClicked(!isDelClicked)
                setDelClicked(!isDelClicked)
            }}
        >
            Delete
        </Button>
    )
}

export default Delete
