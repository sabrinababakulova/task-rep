import React, { useState, useEffect } from 'react'
import { Box, Grid, Button, Flex } from '@chakra-ui/react'
import Card from '../Card'
import { Checkbox, LabelStyled } from './CheckBoxStyled'

const CardList = ({ cardData }) => {
    const [readOnly, setReadOnly] = useState(false)
    const [delClicked, setDelClicked] = useState(false)

    return (
        <Box zIndex={0}>
            <Flex justifyContent="space-around">
                <LabelStyled>
                    <Checkbox
                        checked={readOnly}
                        onChange={() => {
                            setReadOnly(!readOnly)
                        }}
                    />
                    <span>Read Only</span>
                </LabelStyled>

                <Button
                    colorScheme="teal"
                    variant="outline"
                    onClick={() => setDelClicked(!delClicked)}
                >
                    Delete
                </Button>
            </Flex>
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
