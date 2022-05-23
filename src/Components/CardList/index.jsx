import React, { useState } from 'react'
import { Box, Grid, Button } from '@chakra-ui/react'
import Card from '../Card'

const CardList = ({ cardData }) => {
    const [readOnly, setReadOnly] = useState(false)
    return (
        <Box zIndex={0}>
            <Button
                colorScheme="teal"
                w="64"
                variant={readOnly ? 'solid' : 'outline'}
                bottom="1rem"
                onClick={() => setReadOnly(!readOnly)}
            >
                Read Only
            </Button>
            <Grid
                templateColumns={['1fr', '1fr', '1fr', 'repeat(2, 1fr)']}
                gap={8}
            >
                {cardData.map((eachCard) => (
                    <Card
                        key={eachCard.id}
                        data={eachCard}
                        readOnly={readOnly}
                    />
                ))}
            </Grid>
        </Box>
    )
}

export default CardList
