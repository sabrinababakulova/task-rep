import React from 'react'
import { Text, Flex } from '@chakra-ui/react'
const Header = () => {
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
            gap={['10', '20', '40']}
            justifyContent="center"
            _before={{
                content: `""`,
                position: 'absolute',
                width: 'full',
                height: 'full',
                right: 0,
                boxShadow: 'lg',
            }}
        >
            <Text>header1</Text>
            <Text>header2</Text>
            <Text>header3</Text>
            <Text>header4</Text>
        </Flex>
    )
}

export default Header
