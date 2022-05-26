import React, { useState } from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalCloseButton,
    useDisclosure,
    Input,
    ButtonGroup,
    Textarea,
    Button,
} from '@chakra-ui/react'
import { v4 as uuidv4 } from 'uuid'

const AddCard = ({ setAddClicked, isReadOnly }) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [approved, setApproved] = useState(false)
    const [header, setHeader] = useState('')
    const [body, setBody] = useState('')
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
                closeOnOverlayClick={false}
                isOpen={isOpen}
                onClose={onClose}
            >
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Set info for card</ModalHeader>
                    <Input
                        m={2}
                        w="90%"
                        placeholder="header"
                        value={header}
                        onChange={(e) => {
                            setHeader(e.target.value)
                            e.target.value.trim().length > 0
                                ? setApproved(true)
                                : setApproved(false)
                        }}
                        isInvalid={!approved}
                    />
                    <ModalCloseButton />
                    <Textarea
                        m={2}
                        w="90%"
                        value={body}
                        onChange={(e) => {
                            setBody(e.target.value)
                        }}
                        placeholder="Body of card"
                    />

                    <ModalFooter>
                        <ButtonGroup
                            onClick={() => {
                                setHeader('')
                                setBody('')
                                onClose()
                            }}
                        >
                            <Button
                                colorScheme="blue"
                                mr={3}
                                isDisabled={!approved}
                                onClick={() => {
                                    setAddClicked(true, {
                                        id: uuidv4(),
                                        header: header,
                                        body: body,
                                    })
                                }}
                            >
                                Save
                            </Button>
                            <Button>Cancel</Button>
                        </ButtonGroup>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}
export default AddCard
