import React from 'react'
import { ListItem, Text } from '@chakra-ui/react'
import type { RecipeProduct } from 'src/components/interfaces'

const Ingredient: React.FC<RecipeProduct> = ({ ingredient }) => {
  return (
    <ListItem>
      <Text as={'span'}>{ingredient.slice(0, 1)}</Text> {ingredient.slice(1, 2)}
    </ListItem>
  )
}

export default Ingredient
