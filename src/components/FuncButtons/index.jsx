import React from 'react';
import ReadOnly from './ReadOnly';
import Delete from './DeleteCard';
import AddCard from './AddCard';
import { Flex } from '@chakra-ui/react';
const FuncButtons = () => {
  return (
    <Flex justifyContent="space-around" gap={6}>
      <ReadOnly />
      <Delete />
      <AddCard />
    </Flex>
  );
};

export default FuncButtons;
