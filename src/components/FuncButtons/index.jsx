import React from 'react'
import ReadOnly from './ReadOnly'
import Delete from './DeleteCard'
import AddCard from './AddCard'
import { Flex } from '@chakra-ui/react'
import PropTypes from 'prop-types'

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

FuncButtons.propTypes = {
    setReadOnly: PropTypes.func.isRequired,
    setDelClicked: PropTypes.func.isRequired,
    isReadOnly: PropTypes.bool,
    setAddClicked: PropTypes.func.isRequired,
}

export default FuncButtons
