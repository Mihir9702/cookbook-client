import { Text, useColorModeValue } from '@chakra-ui/react'
import React from 'react'
import type { RecipeProduct } from 'src/components/interfaces'

const Guide: React.FC<RecipeProduct> = ({ text }) => {
  return (
    <Text
      fontSize={{ base: '1em', lg: '1.15em' }}
      color={useColorModeValue('gray.800', 'pink.300')}
      fontWeight={600}
      textTransform={'uppercase'}
      mb={'4'}
    >
      {text}
    </Text>
  )
}

export default Guide
