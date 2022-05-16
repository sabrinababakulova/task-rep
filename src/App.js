import Header from "./components/Header";
import Card from "./components/Card";
import { Box } from "@chakra-ui/react";
import { theme } from "./theme";
import React from "react";

function App() {
  return (
    <div>
      <Header />
      <Box
        maxW={theme.sizes.containers.pageSize}
        m={theme.sizes.space.medium}
        align="center"
      >
        <Card />
      </Box>
    </div>
  );
}

export default App;
