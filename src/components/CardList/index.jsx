import React, { useEffect, useState } from 'react'
import { Box, Grid, Badge } from '@chakra-ui/react'
import Card from '../Card'
import PropTypes from 'prop-types'
import { useCardData } from '../../contextProvider'

const CardList = ({ readOnly, setToDelete, delClicked }) => {
    const { checkedCard, allCards, getNumberOfCards } = useCardData()
    const [cardsToDelete, setCardsToDelete] = useState([])
    useEffect(() => {
        if (checkedCard.checked) {
            setCardsToDelete((prevState) => [...prevState, checkedCard.card])
        } else {
            const cardIndex = cardsToDelete.findIndex(
                (id) => id === checkedCard.card
            )
            cardIndex !== -1 &&
                setCardsToDelete((prevState) => {
                    prevState.splice(cardIndex, 1)
                    return [...prevState]
                })
        }
    }, [checkedCard])

    useEffect(() => {
        setToDelete(cardsToDelete)
    }, [cardsToDelete])

    useEffect(() => {
        setCardsToDelete([])
    }, [delClicked])

    return (
        <Box zIndex={0}>
            <Grid
                mt="4"
                templateColumns={['1fr', '1fr', '1fr', 'repeat(2, 1fr)']}
                gap={8}
            >
                {getNumberOfCards === 0 ? (
                    <Badge colorScheme="red" mt="4" fontSize="1em">
                        You dont have any cards
                    </Badge>
                ) : (
                    allCards
                        .slice(0)
                        .reverse()
                        .map((eachCard) => (
                            <Card
                                key={eachCard.id}
                                data={eachCard}
                                readOnly={readOnly}
                            />
                        ))
                )}
            </Grid>
        </Box>
    )
}

CardList.propTypes = {
    readOnly: PropTypes.bool,
    setToDelete: PropTypes.func,
    delClicked: PropTypes.bool,
}

export default CardList
