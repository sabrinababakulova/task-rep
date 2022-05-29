import React, { useEffect, useState } from 'react'
import { Box, Grid, Badge } from '@chakra-ui/react'
import Card from '../Card'

const CardList = ({ cardData, readOnly, setToDelete, clear }) => {
    const [checkedCard, setCheckedCard] = useState({})
    const [cardsToDelete, setCardsToDelete] = useState([])

    useEffect(() => {
        if (checkedCard.checked) {
            setCardsToDelete((prevState) => [...prevState, checkedCard.card])
        } else {
            const cardIndex = cardsToDelete.findIndex(
                (id) => id === checkedCard.card
            )
            cardsToDelete.splice(cardIndex, 1)
        }
    }, [checkedCard])

    useEffect(() => {
        setToDelete(cardsToDelete)
    }, [cardsToDelete, checkedCard])

    useEffect(() => {
        setCardsToDelete([])
    }, [clear])

    return (
        <Box zIndex={0}>
            <Grid
                mt="4"
                templateColumns={['1fr', '1fr', '1fr', 'repeat(2, 1fr)']}
                gap={8}
            >
                {cardData.length === 0 ? (
                    <Badge colorScheme="red" mt="4" fontSize="1em">
                        You dont have any cards
                    </Badge>
                ) : (
                    cardData
                        .slice(0)
                        .reverse()
                        .map((eachCard) => {
                            return (
                                <Card
                                    key={eachCard.id}
                                    data={eachCard}
                                    readOnly={readOnly}
                                    setCheckedCard={(checked, card) => {
                                        setCheckedCard({
                                            card: card,
                                            checked: checked,
                                        })
                                    }}
                                />
                            )
                        })
                )}
            </Grid>
        </Box>
    )
}

export default CardList
