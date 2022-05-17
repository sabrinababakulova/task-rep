import React from "react";
import { Box, Divider, Text, Heading } from "@chakra-ui/react";

function Card() {
  return (
    <Box boxShadow="base" p="8" w="3xl">
      <Heading>Caption</Heading>
      <Divider />
      <Text h="32" display="flex" alignItems="center" justifyContent="center">
        some random text
      </Text>
    </Box>
  );
}

export default Card;
