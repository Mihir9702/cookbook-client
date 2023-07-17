import React, { FC } from 'react'
import {
  Link,
  Text,
  Image,
  Button,
  Center,
  Heading,
  GridItem,
  useColorModeValue,
  Container
} from '@chakra-ui/react'
import type { Card } from 'src/components/interfaces'

const GridCardCategory: FC<Card> = ({ _id, title, image, description }) => {
  return (
    <GridItem
      className="col"
      as={Link}
      width={'100%'}
      height={'100%'}
      rounded={'2xl'}
      href={`/categories/${title}`}
      _hover={{
        textDecor: 'none'
      }}
    >
      <Heading className="g-t">{title}</Heading>
      <Center>
        <Image src={image} borderRadius={'10px'} />
      </Center>
      <Text className="p">{description}</Text>
    </GridItem>
  )
}

export default GridCardCategory
