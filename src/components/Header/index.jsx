import React from 'react'
import { Text, Flex, Badge, Button } from '@chakra-ui/react'
import { useCardData } from '../../contextProvider'
import { Link } from 'react-router-dom'

const Header = () => {
    const { getNumberOfCards } = useCardData()
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
            <Link to="/signIn">
                <Button>SignIn</Button>
            </Link>
            <Link to="/">
                <Button>Home</Button>
            </Link>
            <Text fontWeight="bold" align="center">
                Number Of Cards:
                <Badge ml="2" fontSize="1rem" colorScheme="facebook">
                    {getNumberOfCards()}
                </Badge>
            </Text>
        </Flex>
    )
}

export default Header
