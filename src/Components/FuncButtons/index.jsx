import React from 'react'
import ReadOnly from './ReadOnly'
import Delete from './Delete'
import { Flex } from '@chakra-ui/react'

const index = ({ setReadOnly, setDelClicked, isReadOnly }) => {
    return (
        <Flex justifyContent="space-around">
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
        </Flex>
    )
}

export default index
