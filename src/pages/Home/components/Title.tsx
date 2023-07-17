import React, { FC } from 'react'
import { Heading, useColorModeValue } from '@chakra-ui/react'

type Props = {
  letter: string
}

const TitleLetter: FC<Props> = ({ letter }) => {
  return (
    <Heading
      pt={{ base: 0, md: 24, xl: 0, lg: 0 }}
      fontSize={{ base: '8xl', sm: '8xl', md: '8xl' }}
      fontFamily={'Marck Script, cursive'}
      className="title"
      color={useColorModeValue('gray.700', 'pink.400')}
      pr={letter === 'y' ? 2 : 0}
      _hover={{
        color: useColorModeValue('pink.400', 'white')
      }}
    >
      {letter}
    </Heading>
  )
}

const Title: FC = () => {
  return (
    <>
      <TitleLetter letter="M" />
      <TitleLetter letter="y" />
      <TitleLetter letter="C" />
      <TitleLetter letter="o" />
      <TitleLetter letter="o" />
      <TitleLetter letter="k" />
      <TitleLetter letter="b" />
      <TitleLetter letter="o" />
      <TitleLetter letter="o" />
      <TitleLetter letter="k" />
    </>
  )
}

export default Title
