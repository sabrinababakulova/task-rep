import React from 'react'
import { Box, Text } from '@chakra-ui/react'
import UserNamePasswordInput from '../../components/SignInputs'

function SignIn() {
    return (
        <Box mb={5}>
            <Text textAlign="center" fontSize="30px">
                Sign In
            </Text>
            <UserNamePasswordInput />
        </Box>
    )
}

export default SignIn
