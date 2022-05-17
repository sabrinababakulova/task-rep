import React from "react";
import { Box, Text } from "@chakra-ui/react";
function Header() {
  return (
    <Box
      pos="fixed"
      top="0"
      display="flex"
      justifyContent="space-around"
      alignItems="center"
      width="full"
      height="14"
      _before={{
        content: `""`,
        position: "absolute",
        width: "full",
        height: "full",
        right: 0,
        boxShadow: "lg",
      }}
    >
      <Text>header1</Text>
      <Text>header2</Text>
      <Text>header3</Text>
      <Text>header4</Text>
    </Box>
  );
}

export default Header;
