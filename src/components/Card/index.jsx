import React, { Component } from "react";
import {
  Flex,
  Box,
  Divider,
  Checkbox,
  IconButton,
  ButtonGroup,
  Button,
  Spacer,
  Textarea,
  Input,
} from "@chakra-ui/react";
import { BsPencilSquare } from "react-icons/bs";

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      header: "",
      body: "",
      isEditing: false,
      revertBody: "",
      revertHeader: "",
      checked: false,
    };
  }
  componentDidMount() {
    const text = "Some random text";
    const caption = "Caption";

    this.setState({ body: text, header: caption });
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
            size="sm"
            onClick={() => {
              this.setState({ isEditing: false });
              this.setState({ checked: false });
            }}
          >
            <Button
              variant="outline"
              onClick={() =>
                this.setState({
                  revertHeader: this.state.header,
                  revertBody: this.state.body,
                })
              }
            >
              Save changes
            </Button>
            <Button
              variant="outline"
              onClick={() => {
                this.setState({
                  body: this.state.revertBody,
                  header: this.state.revertHeader,
                });
              }}
            >
              Discard changes
            </Button>
          </ButtonGroup>
        ) : (
          <IconButton
            size="sm"
            isLoading={isEditing}
            icon={<BsPencilSquare size="20" />}
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
