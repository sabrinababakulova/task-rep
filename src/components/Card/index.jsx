import React, { Component } from "react";
import {
  Flex,
  Box,
  Divider,
  Checkbox,
  IconButton,
  ButtonGroup,
  Spacer,
  Textarea,
  Input,
} from "@chakra-ui/react";
import { BsPencilSquare } from "react-icons/bs";
import { FaRegSave } from "react-icons/fa";
import { GrRevert } from "react-icons/gr";

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      header: "Initial Caption",
      body: "Initial text",
      isEditing: false,
      revertBody: "",
      revertHeader: "",
      checked: false,
    };
  }
  validationOnDiscard() {
    if (
      this.state.revertBody.length !== 0 ||
      this.state.revertHeader.length !== 0
    ) {
      this.setState({
        body: this.state.revertBody,
        header: this.state.revertHeader,
      });
    }
    this.setState({ isEditing: false });
  }
  validationOnSave() {
    if (this.state.body.length === 0 && this.state.header.length === 0) {
      alert("The fields should not be empty");
      this.setState({ isEditing: true });
    } else {
      this.setState({
        revertHeader: this.state.header,
        revertBody: this.state.body,
        isEditing: false,
      });
    }
  }

  render() {
    const { body, header, checked, isEditing } = this.state;
    return (
      <Box
        boxShadow="base"
        p="6"
        w={["sm", "lg", "3xl"]}
        bg={checked ? "gray.300" : "gray.100"}
        transition="0.2s linear"
      >
        <Flex justifyContent="space-between">
          <Input
            variant={isEditing ? "filled" : "unstyled"}
            fontSize="2xl"
            isReadOnly={!isEditing}
            value={header}
            onClick={() => this.setState({ revertHeader: this.state.header })}
            onChange={(e) => {
              this.setState({ header: e.target.value });
            }}
          />
          <Checkbox
            hidden={isEditing}
            onChange={() => this.setState({ checked: !this.state.checked })}
            colorScheme="green"
            borderColor="gray.500"
            isChecked={checked}
          ></Checkbox>
        </Flex>
        <Divider h={2} />
        <Textarea
          value={body}
          fontSize="xl"
          variant={isEditing ? "filled" : "unstyled"}
          onClick={() => this.setState({ revertBody: this.state.body })}
          isReadOnly={!isEditing}
          onChange={(e) => {
            this.setState({ body: e.target.value });
          }}
        />
        <Spacer h="16" />

        {isEditing ? (
          <ButtonGroup
            justifyContent="space-around"
            w="full"
            size="lg"
            onClick={() => {
              this.setState({ checked: false });
            }}
          >
            <IconButton
              icon={<GrRevert size="32" />}
              onClick={() => {
                this.validationOnDiscard();
              }}
            />
            <IconButton
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
              this.setState({ isEditing: true });
              this.setState({ checked: false });
            }}
          />
        )}
      </Box>
    );
  }
}

export default Card;
