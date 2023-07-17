import React from 'react'
import {
  Box,
  Link,
  Image,
  Heading,
  GridItem,
  useColorModeValue
} from '@chakra-ui/react'
import type { Recipe } from 'src/components/interfaces'

const RecipeStr: React.FC<Recipe> = ({ _id, image, title }) => {
  return (
    <Box key={_id}>
      <GridItem
        className="cat-col"
        border={'1px solid'}
        borderColor={useColorModeValue('pink.300', 'pink.500')}
        as={Link}
        href={`/recipes/${title}`}
      >
        <Heading className="g-t">{title}</Heading>
        <Image src={image} borderRadius={'10px'} />
      </GridItem>
    </Box>
  )
}

export default RecipeStr
