import React from 'react'
import { Image, Link, Text, useBreakpointValue } from '@chakra-ui/react'
import logo from 'src/assets/og-image.png'

const Logo: React.FC = () => {
  return (
    <Text
      display={'flex'}
      justifyContent={'center'}
      align={'center'}
      as={Link}
      href="/"
      textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
    >
      <Image
        src={logo}
        alt="logo"
        left={1}
        top={1}
        zIndex={100}
        w={'4em'}
        position={'absolute'}
      />
    </Text>
  )
}

export default Logo
