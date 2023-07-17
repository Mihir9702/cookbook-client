import React from 'react'
import { Button, useColorModeValue } from '@chakra-ui/react'

interface Props {
  color: string
  onClick: (e: React.FormEvent) => void
}

const MyButton: React.FC<Props> = ({ color, onClick, children }) => {
  return (
    <Button
      onClick={onClick}
      my={6}
      bg={'transparent'}
      border={'2px solid'}
      borderColor={useColorModeValue(`${color}.400`, `${color}.300`)}
      color={useColorModeValue(`${color}.500`, `${color}.400`)}
      _hover={{
        bg: useColorModeValue(`${color}.500`, `${color}.400`),
        color: 'white'
      }}
    >
      {children}
    </Button>
  )
}

export default MyButton
