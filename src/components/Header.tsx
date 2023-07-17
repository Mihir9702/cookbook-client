import React from 'react'
import { Heading, Text } from '@chakra-ui/react'

interface Props {
  title: string | undefined
}

const Header: React.FC<Props> = ({ title }) => {
  return (
    <>
      <Heading className="cat-t" position={'relative'}>
        {title}
      </Heading>
      <Text
        mb={6}
        bottom={16}
        pos={'relative'}
        display={'flex'}
        justifyContent={'center'}
        fontSize={'1.1em'}
        fontWeight={600}
      >
        Click on one of the options below to read more
      </Text>
    </>
  )
}

export default Header
