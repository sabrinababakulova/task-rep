import React from 'react';
import Delete from './DeleteCard';
import AddCard from './AddCard';
import { Flex } from '@chakra-ui/react';
const FuncButtons = () => {
  return (
    <Flex justifyContent="space-around" gap={6}>
      <Delete />
      <AddCard />
    </Flex>
  );
};

export default FuncButtons;
