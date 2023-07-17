import React from 'react'
import {
  Box,
  Link,
  Text,
  Stack,
  Button,
  Heading,
  Container,
  useColorModeValue
} from '@chakra-ui/react'
import { ArrowForwardIcon } from '@chakra-ui/icons'

interface Props {
  cb: {
    _id: string
    owner: string
    recipes: string[]
  }
  i: number
}

const MyCookbooks: React.FC<Props> = ({ cb, i }) => {
  const borderSize = useColorModeValue('2px solid', '1px solid')
  const textColor = useColorModeValue('blue', 'teal')
  const user = localStorage.getItem('username')
  return (
    <Stack>
      <Button
        boxSize="xs"
        spacing={8}
        border={borderSize}
        borderColor={useColorModeValue('blue.500', 'teal.400')}
        rounded="3xl"
        pos="relative"
        as={Link}
        href={`/${user}/my-cookbooks/${cb._id}`}
        colorScheme={textColor}
        variant="outline"
        boxShadow="dark-lg"
        m={8}
        p={8}
        justify="flex-start"
        align="center"
        _hover={{
          textDecoration: 'none',
          bg: useColorModeValue('blue.50', 'teal.900')
        }}
      >
        <Container>
          <Heading my={8}>Cookbook {i + 1}</Heading>
          <Text>Recipes: {cb.recipes.length}</Text>
        </Container>
        <Box pos={'absolute'} my={8} bottom={0} fontSize={'3xl'}>
          <ArrowForwardIcon />
        </Box>
      </Button>
    </Stack>
  )
}

export default MyCookbooks
