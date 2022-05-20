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

class Card extends Component {
    constructor(props) {
        super(props)
        this.state = {
            header: props.header,
            body: props.body,
            revertHeader: '',
            revertBody: '',
            boxChecked: false,
            isEditing: false,
            editApproved: true,
            isReadOnly: props.isReadOnly,
        }
    }
    componentDidMount() {
        this.setState({
            revertHeader: this.state.header,
            revertBody: this.state.body,
        })
    }

    componentDidUpdate(prevProps) {
        // Typical usage (don't forget to compare props):
        if (this.props.isReadOnly !== prevProps.isReadOnly) {
            this.setState({
                header: this.state.revertHeader,
                body: this.state.revertBody,
                isReadOnly: this.props.isReadOnly,
                isEditing: false,
                editApproved: true,
            })
        }
    }

    validationOnDiscard() {
        this.setState({
            header: this.state.revertHeader,
            body: this.state.revertBody,
            editApproved: true,
            isEditing: false,
        })
    }

    validationOnSave() {
        //trimming to get rid of spaces
        const isEmpty = (str) => !str.trim().length

        if (isEmpty(this.state.header)) {
            this.setState({
                isEditing: true,
                editApproved: false,
            })
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
        const {
            body,
            header,
            boxChecked,
            isEditing,
            editApproved,
            isReadOnly,
        } = this.state

        return (
            <Box
                boxShadow="base"
                p="6"
                mb="4"
                w={['xs', 'sm', 'lg']}
                bg={boxChecked ? 'gray.300' : 'gray.100'}
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
                            this.setState({
                                boxChecked: !this.state.boxChecked,
                            })
                        }
                        colorScheme="green"
                        borderColor="gray.500"
                        isChecked={boxChecked}
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
                {isEditing && !isReadOnly ? (
                    <ButtonGroup
                        justifyContent="space-around"
                        w="full"
                        size="lg"
                        onClick={() => this.setState({ boxChecked: false })}
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
                        isDisabled={isReadOnly}
                        size="lg"
                        icon={<BsPencilSquare size="32" />}
                        onClick={() => {
                            this.setState({ isEditing: true })
                            this.setState({ boxChecked: false })
                        }}
                    />
                )}
            </Box>
        )
    }
}

export default Card
