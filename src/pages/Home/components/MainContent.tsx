import React, { FC } from 'react'
import { Center, Flex } from '@chakra-ui/react'
import { Text, Button, Stack, Link } from '@chakra-ui/react'
import Title from './Title'

const MainContent: FC = () => {
  return (
    <Stack
      as={Center}
      textAlign={'center'}
      spacing={{ base: 8, md: 14 }}
      pos={'relative'}
      top={'20vh'}
    >
      <Flex userSelect={'none'} letterSpacing={5}>
        <Title />
      </Flex>
      <Text color={'gray.400'} fontWeight={600}>
        Customize your own personal cookbook with recipes <br />
        ranging from breakfast all the way to dessert!
      </Text>
      <Button
        href="/recipes"
        as={Link}
        colorScheme={'pink.500'}
        color={'white'}
        bg={'pink.400'}
        rounded={'full'}
        px={6}
        _hover={{
          bg: 'pink.500',
          textDecor: 'none'
        }}
      >
        Start Cooking
      </Button>
    </Stack>
  )
}

export default MainContent
