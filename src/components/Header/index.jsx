import React from 'react';
import { Text, Flex, Badge, Button } from '@chakra-ui/react';
import { useSelector, useDispatch } from 'react-redux';
import { setAdmin, setSimpleUser } from '../../store/UserSlide';
import { Link } from 'react-router-dom';

const Header = () => {
  const dispatch = useDispatch();
  const cardsCollection = useSelector(
    (state) => state.allCardsInfo.cardsCollection
  );
  const user = useSelector((state) => state.user);
  const onClickSignOut = () => {
    user.role === 'admin'
      ? dispatch(setAdmin({ name: '', status: false }))
      : dispatch(setSimpleUser({ name: '', status: false }));
  };
  return (
    <Flex
      pos="fixed"
      top="0"
      right="0"
      width="full"
      height="14"
      zIndex="1"
      bg="white"
      alignItems="center"
      justifyContent="space-around"
      _before={{
        content: `''`,
        position: 'absolute',
        width: 'full',
        height: 'full',
        right: 0,
        boxShadow: 'lg',
      }}
    >
      <Button onClick={onClickSignOut}>Sign out</Button>
      <Link to="/">
        <Button>Home</Button>
      </Link>
      <Text fontWeight="bold" align="center">
        Welcome {user.name.split('@')[0]}!
      </Text>
      <Text fontWeight="bold" align="center">
        Number Of cards:
        <Badge ml="2" fontSize="1rem" colorScheme="facebook">
          {cardsCollection.length}
        </Badge>
      </Text>
    </Flex>
  );
};

export default Header;
