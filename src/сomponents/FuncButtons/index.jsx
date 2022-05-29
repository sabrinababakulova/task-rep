import React from 'react'
import ReadOnly from './ReadOnly'
import Delete from './Delete'
import AddCard from './AddCard'
import { Flex } from '@chakra-ui/react'

const FuncButtons = ({
    setReadOnly,
    setDelClicked,
    isReadOnly,
    setAddClicked,
}) => {
    return (
        <Flex justifyContent="space-around" gap={6}>
            <ReadOnly
                setReadOnly={(readOnly) => {
                    setReadOnly(readOnly)
                }}
            />
            <Delete
                isReadOnly={isReadOnly}
                setDelClicked={(delClicked) => {
                    setDelClicked(delClicked)
                }}
            />
            <AddCard
                isReadOnly={isReadOnly}
                setAddClicked={(addClicked, card) => {
                    setAddClicked(addClicked, card)
                }}
            />
        </Flex>
    )
}

export default FuncButtons
