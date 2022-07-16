import React from 'react'
import { Box, Text } from '@chakra-ui/react'
import SignIn from '../../components/SignIn'

function SignInPage() {
  return (
    <Box mb={5}>
      <Text textAlign="center" fontSize="30px">
        Sign In
      </Text>
      <SignIn />
    </Box>
  )
}

export default SignInPage
