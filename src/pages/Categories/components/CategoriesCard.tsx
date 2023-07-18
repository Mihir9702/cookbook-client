import React, { FC } from 'react'
import {
  Link,
  Text,
  Image,
  Center,
  Heading,
  GridItem,
  useColorModeValue,
} from '@chakra-ui/react'
import type { Card } from 'src/components/interfaces'

const GridCardCategory: FC<Card> = ({ _id, title, image, description }) => {
  return (
    <GridItem
      key={_id}
      className="col"
      as={Link}
      href={`/categories/${title}`}
      backgroundColor={(useColorModeValue('gray.100', 'gray.700'))}
      marginY={"1em"}
    >
      <Heading className="g-t">{title}</Heading>
      <Center>
        <Image src={image} borderRadius={'10px'} marginY={"10px"} />
      </Center>
      <Text className="p">{description}</Text>
    </GridItem>
  )
}

export default GridCardCategory
