import React from 'react'
import {
  Link,
  Image,
  Heading,
  GridItem,
  useColorModeValue
} from '@chakra-ui/react'
import type { Recipe } from 'src/components/interfaces'

const RecipeStr: React.FC<Recipe> = ({ _id, image, title }) => {
  return (
    <GridItem
      key={_id}
      className="cat-col"
      border={'1px solid'}
      borderColor={useColorModeValue('pink.300', 'pink.500')}
      as={Link}
      href={`/recipes/${title}`}
    >
      <Heading className="g-t">{title}</Heading>
      <Image src={image} borderRadius={'10px'} />
    </GridItem>
  )
}

export default RecipeStr
