import React, { Component } from 'react'
import {
    Flex,
    Box,
    Divider,
    Checkbox,
    IconButton,
    ButtonGroup,
    Spacer,
    Textarea,
    FormErrorMessage,
    Input,
    FormControl,
} from '@chakra-ui/react'
import { BsPencilSquare } from 'react-icons/bs'
import { FaRegSave } from 'react-icons/fa'
import { GrRevert } from 'react-icons/gr'

//trimming to get rid of spaces
function isEmpty(str) {
    return !str.trim().length
}

class Card extends Component {
    constructor(props) {
        super(props)
        this.state = {
            header: 'Initial Caption',
            body: 'Initial text',
            isEditing: false,
            revertHeader: 'Initial Caption',
            revertBody: 'Initial text',
            checked: false,
            editApproved: true,
        }
    }

    validationOnDiscard() {
        if (!isEmpty(this.state.revertHeader)) {
            this.setState({
                header: this.state.revertHeader,
                body: this.state.revertBody,
                editApproved: true,
                isEditing: false,
            })
        } else {
            this.setState({
                editApproved: false,
                isEditing: true,
            })
        }
    }

    validationOnSave() {
        if (isEmpty(this.state.header)) {
            this.setState({ isEditing: true, editApproved: false })
        } else {
            this.setState({
                revertHeader: this.state.header,
                revertBody: this.state.body,
                isEditing: false,
                editApproved: true,
            })
        }
    }

    render() {
        const { body, header, checked, isEditing, editApproved } = this.state
        return (
            <Box
                boxShadow="base"
                p="6"
                w={['sm', 'lg', '3xl']}
                bg={checked ? 'gray.300' : 'gray.100'}
                transition="0.2s linear"
            >
                <Flex justifyContent="space-between">
                    <FormControl
                        isInvalid={!editApproved}
                        onChange={() => this.setState({ editApproved: true })}
                    >
                        <Input
                            variant={isEditing ? 'filled' : 'unstyled'}
                            fontSize="2xl"
                            isReadOnly={!isEditing}
                            value={header}
                            onClick={() =>
                                this.setState({
                                    revertHeader: this.state.header,
                                })
                            }
                            onChange={(e) =>
                                this.setState({ header: e.target.value })
                            }
                        />
                        {!editApproved && (
                            <FormErrorMessage>
                                Header should not be empty
                            </FormErrorMessage>
                        )}
                    </FormControl>
                    <Checkbox
                        hidden={isEditing}
                        onChange={() =>
                            this.setState({ checked: !this.state.checked })
                        }
                        colorScheme="green"
                        borderColor="gray.500"
                        isChecked={checked}
                    ></Checkbox>
                </Flex>
                <Divider h={2} />
                <Textarea
                    value={body}
                    fontSize="xl"
                    variant={isEditing ? 'outline' : 'unstyled'}
                    onClick={() =>
                        this.setState({ revertBody: this.state.body })
                    }
                    isReadOnly={!isEditing}
                    onChange={(e) => this.setState({ body: e.target.value })}
                />
                <Spacer h="16" />

                {isEditing ? (
                    <ButtonGroup
                        justifyContent="space-around"
                        w="full"
                        size="lg"
                        onClick={() => this.setState({ checked: false })}
                    >
                        <IconButton
                            icon={<GrRevert size="32" />}
                            onClick={() => this.validationOnDiscard()}
                        />
                        <IconButton
                            isDisabled={!editApproved}
                            icon={<FaRegSave size="32" />}
                            onClick={() => this.validationOnSave()}
                        />
                    </ButtonGroup>
                ) : (
                    <IconButton
                        size="lg"
                        isLoading={isEditing}
                        icon={<BsPencilSquare size="32" />}
                        onClick={() => {
                            this.setState({ isEditing: true })
                            this.setState({ checked: false })
                        }}
                    />
                )}
            </Box>
        )
    }
}

export default Card
