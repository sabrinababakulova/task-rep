import React, { useEffect } from 'react';
import { Box, Grid, Badge, Spinner, Center } from '@chakra-ui/react';
import Card from '../Card';
import { useSelector, useDispatch } from 'react-redux';
import { fetchData } from '../../store/AllCardsSlice';
import { useTranslation } from 'react-i18next';
const CardList = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  useEffect(() => {
    if (!allCardsInfo.status) dispatch(fetchData());
  }, []);
  const { allCardsInfo } = useSelector((state) => state);
  if (allCardsInfo.status === 'loading') {
    return (
      <Center mt={4}>
        <Spinner size="xl" color="teal" thickness="4px" />;
      </Center>
    );
  }
  return (
    <Box zIndex={0}>
      <Grid
        mt="4"
        templateColumns={['1fr', '1fr', '1fr', 'repeat(2, 1fr)']}
        gap={8}
      >
        {allCardsInfo.cardsCollection.length === 0 ? (
          <Badge colorScheme="red" mt="4" fontSize="1em">
            {t('errors.noCards')}
          </Badge>
        ) : (
          allCardsInfo.cardsCollection
            .slice()
            .reverse()
            .map((eachCard) => <Card key={eachCard.id} data={eachCard} />)
        )}
      </Grid>
    </Box>
  );
};

export default CardList;
