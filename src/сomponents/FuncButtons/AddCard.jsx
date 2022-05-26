import React from 'react'
import { Button } from '@chakra-ui/react'

const AddCard = ({ setAddClicked, isReadOnly }) => {
    return (
        <Button
            isDisabled={isReadOnly}
            colorScheme="teal"
            variant="outline"
            onClick={() => {
                setAddClicked(true)
            }}
        >
            Add
        </Button>
    )
}
export default AddCard
