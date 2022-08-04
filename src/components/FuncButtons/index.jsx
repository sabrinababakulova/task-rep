import React from 'react';
import ReadOnly from './ReadOnly';
import Delete from './DeleteCard';
import AddCard from './AddCard';
import { Flex } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
const FuncButtons = () => {
  const { user } = useSelector((state) => state);
  return (
    <Flex justifyContent="space-around" gap={6}>
      {user.role === 'simple_user' && <ReadOnly />}
      <Delete />
      <AddCard />
    </Flex>
  );
};

export default FuncButtons;
