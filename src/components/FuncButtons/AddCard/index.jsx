import React from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    useDisclosure,
    Button,
    Center,
} from '@chakra-ui/react'
import Card from '../../Card'
import PropTypes from 'prop-types'

const AddCard = ({ setAddClicked, isReadOnly }) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <>
            <Button
                isDisabled={isReadOnly}
                colorScheme="teal"
                variant="outline"
                onClick={onOpen}
            >
                Add
            </Button>

            <Modal
                size="xl"
                closeOnOverlayClick={false}
                isOpen={isOpen}
                onClose={onClose}
            >
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Set info for card</ModalHeader>
                    <Center>
                        <Card
                            data={{ header: '', body: '' }}
                            newCard={true}
                            editing={true}
                            onClose={onClose}
                            setAddClicked={setAddClicked}
                        />
                    </Center>
                    <ModalCloseButton />
                </ModalContent>
            </Modal>
        </>
    )
}

AddCard.propTypes = {
    setAddClicked: PropTypes.func.isRequired,
    isReadOnly: PropTypes.bool,
}

export default AddCard
