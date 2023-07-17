import React from 'react'
import { Box, Heading, Text, Button, Link } from '@chakra-ui/react'

const ErrorPage = () => {
  return (
    <Box textAlign="center" py={10} px={6}>
      <Heading
        display="inline-block"
        as="h2"
        size="2xl"
        bgGradient="linear(to-r, pink.400, purple.400, teal.500)"
        backgroundClip="text"
      >
        404
      </Heading>
      <Text fontSize="2em" mt={3} mb={2} fontWeight={600}>
        Page Not Found
      </Text>
      <Text color={'gray.500'} mb={6}>
        Oh no, I think we stumbled upon some unknown territory <br />
        Lets head back shall we?
      </Text>

      <Button
        bgGradient="linear(to-r, pink.400, purple.500, teal.500)"
        color="white"
        colorScheme={'purple'}
        as={Link}
        href="/"
        _hover={{
          textDecoration: 'none'
        }}
      >
        Go to Home
      </Button>
    </Box>
  )
}

export default ErrorPage
