import React, {useContext} from 'react'
import { Text, Flex, Badge } from '@chakra-ui/react'
import { UserContext } from '../../App'

const Header = () => {
const { dataDisplay } = useContext(UserContext)
    return (
        <Flex
            pos='fixed'
            top='0'
            right='0'
            width='full'
            height='14'
            zIndex='1'
            bg='white'
            alignItems='center'
            justifyContent='space-around'
            _before={{
                content: `''`,
                position: 'absolute',
                width: 'full',
                height: 'full',
                right: 0,
                boxShadow: 'lg',
            }}
        >
            <Text>header1</Text>
            <Text>header2</Text>
            <Badge>{dataDisplay.length} items</Badge>
            <Text>header3</Text>
            <Text>header4</Text>
        </Flex>
    )
}


export default Header
