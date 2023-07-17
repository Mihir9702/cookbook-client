import React from 'react'
import { Grid, GridItem, FormLabel } from '@chakra-ui/react'

interface Props {
  unique: string[] | null
}

const CartGrid: React.FC<Props> = ({ unique }) => {
  return (
    <Grid
      pos={'absolute'}
      top={0}
      py={6}
      px={6}
      templateColumns={'repeat(3, 1fr)'}
      fontFamily={'cursive'}
      fontWeight={800}
      zIndex={-1}
    >
      {unique.map(item => (
        <GridItem key={item}>
          <FormLabel>{item}</FormLabel>
        </GridItem>
      ))}
    </Grid>
  )
}

export default CartGrid
