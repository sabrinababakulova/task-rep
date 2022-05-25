import React from 'react'
import { Box, Grid } from '@chakra-ui/react'
import Card from '../Card'

const CardList = ({ cardData, readOnly, delClicked }) => {
    return (
        <Box zIndex={0}>
            <Grid
                mt="4"
                templateColumns={['1fr', '1fr', '1fr', 'repeat(2, 1fr)']}
                gap={8}
            >
                {cardData.map((eachCard) => (
                    <Card
                        key={eachCard.id}
                        data={eachCard}
                        readOnly={readOnly}
                        delClicked={delClicked}
                    />
                ))}
            </Grid>
        </Box>
    )
}

export default CardList
