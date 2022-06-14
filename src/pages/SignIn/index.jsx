import React from 'react'
import {
    Box,
    Text,
    Input,
    Button,
    Center,
    FormControl,
    FormLabel,
} from '@chakra-ui/react'

function SignIn() {
    const handleSubmit = (event) => {
        event.preventDefault()
    }

    return (
        <Box mb={5}>
            <Text textAlign="center" fontSize="30px">
                Sign In
            </Text>
            <form onSubmit={handleSubmit}>
                <FormControl isRequired>
                    <FormLabel htmlFor="user-name">User name</FormLabel>
                    <Input placeholder="Enter your name" />

                    <FormLabel htmlFor="email" mt="5">
                        Email
                    </FormLabel>
                    <Input placeholder="Enter your email address" />

                    <Center mt={7}>
                        <Button type="submit" variant="solid" p="20px 30px">
                            Sign in
                        </Button>
                    </Center>
                </FormControl>
            </form>
        </Box>
    )
}

export default SignIn
