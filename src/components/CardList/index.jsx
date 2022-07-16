import React from 'react'
import { Box, Grid, Badge } from '@chakra-ui/react'
import Card from '../Card'
import { useSelector } from 'react-redux'

const CardList = () => {
  const { cards } = useSelector((state) => state)
  return (
    <Box zIndex={0}>
      <Grid
        mt="4"
        templateColumns={['1fr', '1fr', '1fr', 'repeat(2, 1fr)']}
        gap={8}
      >
        {cards.numberOfCards === 0 ? (
          <Badge colorScheme="red" mt="4" fontSize="1em">
            You dont have any cards
          </Badge>
        ) : (
          cards.cards
            .slice(0)
            .reverse()
            .map((eachCard) => <Card key={eachCard.id} data={eachCard} />)
        )}
      </Grid>
    </Box>
  )
}

export default CardList
