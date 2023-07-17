import React, { FC, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { url } from 'src/services/url'
import FormInput from 'src/components/FormInput'
import {
  Flex,
  Box,
  Stack,
  Button,
  Heading,
  useColorModeValue
} from '@chakra-ui/react'

const LoginPage: FC = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const reqBody = {
    username: username,
    password: password
  }

  const navigate = useNavigate()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    axios
      .post(`${url}/user/login`, reqBody)
      .then(res => {
        localStorage.setItem('token', res.data.authToken)
        localStorage.setItem('id', res.data._id)
        localStorage.setItem('name', res.data.name)
        localStorage.setItem('username', res.data.username)
        navigate('/')
        location.reload()
      })
      .catch(() => navigate('/login'))
  }

  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}
    >
      <Stack spacing={8} mx={'auto'} w={'md'} py={12} px={6}>
        <Heading textAlign={'center'} fontSize={'4xl'}>
          Login
        </Heading>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'xl'}
          p={10}
          pt={12}
        >
          <form onSubmit={handleSubmit}>
            <Stack spacing={4}>
              <FormInput
                label="Username"
                value={username}
                setValue={setUsername}
              />
              <FormInput
                label="Password"
                value={password}
                setValue={setPassword}
              />
              <Stack spacing={10}>
                <Button
                  bg={'pink.400'}
                  mt={8}
                  cursor={'pointer'}
                  colorScheme={'pink'}
                  type="submit"
                  color={'white'}
                  _hover={{
                    bg: 'pink.500'
                  }}
                >
                  Sign in
                </Button>
              </Stack>
            </Stack>
          </form>
        </Box>
      </Stack>
    </Flex>
  )
}

export default LoginPage
