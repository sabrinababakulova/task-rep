import React, { useState } from 'react'
import { Box, Grid, Button } from '@chakra-ui/react'
import Card from '../Card'

const CardList = ({ CardData }) => {
    const [isReadOnly, setIsReadOnly] = useState(false)
    return (
        <Box zIndex={0}>
            <Button
                colorScheme="teal"
                w="64"
                variant={isReadOnly ? 'solid' : 'outline'}
                bottom="1rem"
                onClick={() => setIsReadOnly(!isReadOnly)}
            >
                Read Only
            </Button>
            <Grid
                templateColumns={['1fr', '1fr', '1fr', 'repeat(2, 1fr)']}
                gap={8}
            >
                {CardData.map((eachCard, index) => (
                    <Card
                        key={eachCard.id}
                        data={eachCard}
                        isReadOnly={isReadOnly}
                    />
                ))}
            </Grid>
        </Box>
    )
}

export default CardList
