import React from 'react'
import { Spinner, useColorModeValue } from '@chakra-ui/react'

const MySpinner: React.FC = () => {
  return (
    <Spinner
      thickness="4px"
      speed="0.65s"
      pos={'absolute'}
      left={'50vw'}
      bottom={'50vh'}
      color="blue.500"
      emptyColor={useColorModeValue('white', 'gray.700')}
      size="xl"
    />
  )
}

export default MySpinner
