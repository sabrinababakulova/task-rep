import React from 'react';
import { Text, Flex, Badge, Button } from '@chakra-ui/react';
import { useSelector, useDispatch } from 'react-redux';
import { setUser } from '../../store/UserSlide';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
const Header = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const cardsCollection = useSelector(
    (state) => state.allCardsInfo.cardsCollection
  );
  const user = useSelector((state) => state.user);
  const onClickSignOut = () => {
    dispatch(setUser({ name: '', status: false, role: 'simple_user' }));
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
      <Button onClick={onClickSignOut}>{t('header.signOut')}</Button>
      <NavLink to="/">
        {({ isActive }) => (
          <Button colorScheme={isActive ? 'teal' : 'gray'}>
            {t('header.home')}
          </Button>
        )}
      </NavLink>
      <Text fontWeight="bold" align="center">
        {t('header.welcome')} {user.name.split('@')[0]}!
      </Text>
      {user.role === 'admin' && (
        <NavLink to="/settings">
          {({ isActive }) => (
            <Button colorScheme={isActive ? 'teal' : 'gray'}>
              {t('header.settings')}
            </Button>
          )}
        </NavLink>
      )}
      <Text fontWeight="bold" align="center">
        {t('header.numOfCards')}
        <Badge ml="2" fontSize="1rem" colorScheme="facebook">
          {cardsCollection.length}
        </Badge>
      </Text>
    </Flex>
  );
};

export default Header;
