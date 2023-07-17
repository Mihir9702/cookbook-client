import React, { FC, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import {
  Box,
  Flex,
  Text,
  Stack,
  Button,
  Heading,
  useColorModeValue
} from '@chakra-ui/react'
import FormInput from 'src/components/FormInput'
import { url } from 'src/services/url'

const SignupPage: FC = () => {
  const [name, setName] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    const reqBody = {
      name: name,
      username: username,
      password: password
    }

    e.preventDefault()
    axios.post(`${url}/user/signup`, reqBody)?.then(res => {
      localStorage.setItem('token', res.data.authToken)
      localStorage.setItem('id', res.data._id)
      localStorage.setItem('name', res.data.name)
      localStorage.setItem('username', res.data.username)
      navigate('/')
      location.reload()
    })
  }

  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.100', 'gray.800')}
    >
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'5xl'}>Sign Up</Heading>
          <Text fontSize={'lg'} color={'gray.600'} textAlign={'center'}>
            Create an account to start making cookbooks!
          </Text>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('gray.50', 'gray.700')}
          boxShadow={'lg'}
          p={8}
        >
          <form onSubmit={handleSubmit}>
            <Stack spacing={4}>
              <FormInput label="Name" value={name} setValue={setName} />
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
                <Stack
                  direction={{ base: 'column', sm: 'row' }}
                  align={'start'}
                  justify={'space-between'}
                ></Stack>
                <Button
                  bg={'pink.400'}
                  color={'white'}
                  colorScheme={'pink'}
                  type="submit"
                  cursor={'pointer'}
                  _hover={{
                    bg: 'pink.500'
                  }}
                >
                  Sign up
                </Button>
              </Stack>
            </Stack>
          </form>
        </Box>
      </Stack>
    </Flex>
  )
}

export default SignupPage
