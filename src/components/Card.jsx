import React from "react";
import { Box, Divider, Text, Heading } from "@chakra-ui/react";
import { theme } from "../theme";

function Card() {
  return (
    <Box
      boxShadow="0 0 10px 0 grey"
      p={theme.sizes.containers.extrasmall}
      w={theme.sizes.containers.big}
    >
      <Heading>Caption</Heading>
      <Divider />
      <Text
        h={theme.sizes.containers.medium}
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        some random text
      </Text>
    </Box>
  );
}

export default Card;
