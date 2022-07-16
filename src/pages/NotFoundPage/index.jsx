import React from 'react'
import { Box, Center, Heading, Image, Button } from '@chakra-ui/react'
import AnimeGirl from '../../assets/NotFoundPhoto.png'
import { Link } from 'react-router-dom'

const NotFoundPage = () => {
  return (
    <Box mt="10em" textAlign="center">
      <Heading mb="3">404 PAGE NOT FOUND</Heading>
      <Center mb="5">
        <Image
          lazy
          src={AnimeGirl}
          alt="girl crying"
          boxSize="12.5rem"
          objectFit="cover"
          borderRadius="17"
          align="center"
        />
      </Center>
      <Link to="/">
        <Button
          variant="outline"
          size="md"
          _hover={{
            boxShadow: '0 0 2px 0 teal, inset 0 0 2px 0 white',
          }}
        >
          Go Home
        </Button>
      </Link>
    </Box>
  )
}

export default NotFoundPage
