import React, { useState } from 'react'
import { Box, Grid } from '@chakra-ui/react'
import Card from '../Card'
import { Checkbox, LabelStyled } from './CheckBoxStyled'

const CardList = ({ cardData }) => {
    const [readOnly, setReadOnly] = useState(false)
    return (
        <Box zIndex={0}>
            <LabelStyled>
                <Checkbox
                    checked={readOnly}
                    onChange={() => {
                        setReadOnly(!readOnly)
                    }}
                />
                <span>Read Only</span>
            </LabelStyled>
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
                    />
                ))}
            </Grid>
        </Box>
    )
}

export default CardList
