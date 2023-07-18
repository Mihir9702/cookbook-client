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
      key={_id}
      className="col"
      as={Link}
      href={`/categories/${title}`}
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
