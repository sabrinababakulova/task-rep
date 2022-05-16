import React from "react";
import { Box, Text } from "@chakra-ui/react";
import { theme } from "../theme";
function Header() {
  return (
    <Box
      pos="fixed"
      top={theme.sizes.space.none}
      display="flex"
      justifyContent="space-around"
      alignItems="center"
      width={theme.sizes.containers.full}
      height={theme.sizes.containers.small}
      _before={{
        content: `""`,
        position: "absolute",
        width: `${theme.sizes.containers.full}`,
        height: `${theme.sizes.containers.full}`,
        right: `${theme.sizes.space.none}`,
        boxShadow: "0 0 10px 0 grey",
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
