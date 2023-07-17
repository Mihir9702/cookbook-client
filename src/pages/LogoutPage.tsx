import React, { FC, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Center, Spinner, useColorModeValue } from '@chakra-ui/react'

const LogoutPage: FC = () => {
  const navigate = useNavigate()

  useEffect(() => {
    localStorage.clear()
    navigate('/')
    location.reload()
  }, [])

  return (
    <Center w={'100%'} h={'100%'}>
      <Spinner
        thickness="4px"
        speed="0.65s"
        color="blue.500"
        emptyColor={useColorModeValue('white', 'gray.700')}
        size="xl"
      />
    </Center>
  )
}

export default LogoutPage
