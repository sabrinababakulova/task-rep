import React, { useState } from "react";
import { Flex, Box, Divider, Text, Heading, Checkbox } from "@chakra-ui/react";

function Card() {
  const [checked, setChecked] = useState(false);
  return (
    <Box
      boxShadow="base"
      p="8"
      w={["sm", "lg", "3xl"]}
      bg={checked ? "gray.100" : "gray.400"}
      transition="0.2s linear"
    >
      <Flex>
        <Heading flex={1}>Caption</Heading>
        <Checkbox
          size="lg"
          colorScheme="green"
          onChange={() => setChecked(!checked)}
        ></Checkbox>
      </Flex>
      <Divider />
      <Text h="32" display="flex" alignItems="center">
        some random text
      </Text>
    </Box>
  );
}

export default Card;
