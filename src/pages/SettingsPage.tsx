import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { url } from 'src/services/url'
import FormInput from 'src/components/FormInput'
import MyButton from 'src/components/MyButton'
import { get } from 'src/services/service'
import { Box, Stack, Center, useColorModeValue } from '@chakra-ui/react'

const SettingsPage: React.FC = () => {
  const [name, setName] = useState(localStorage.getItem('name'))
  const [username, setUsername] = useState(localStorage.getItem('username'))
  const [id, setId] = useState()
  const [current, setCurrent] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  // Updating Information
  const handleUpdate = () => {
    if (current) {
      axios
        .post(`${url}/${current}/update`, {
          name: name,
          username: username
        })
        .then(() => {
          localStorage.setItem('name', name)
          localStorage.setItem('username', username)
          navigate('/')
          location.reload()
        })
    }
  }

  const handleDelete = () => {
    const localid = localStorage.getItem('id')
    if (id === localid) {
      axios.post(`${url}/user/${id}/delete`)
      localStorage.clear()
      navigate('/')
      location.reload()
    }
  }

  // Retrieving Information
  const getUser = async () => {
    const response = await get(`/${username}`)
    setCurrent(response?.data.username)
    setId(response?.data._id)
  }

  useEffect(() => {
    getUser()
  }, [])

  return (
    <Center
      pos={'absolute'}
      bottom={'50vh'}
      left={'50vw'}
      transform={'translate(-50%, 50%)'}
      background={useColorModeValue('gray.100', 'gray.700')}
      borderRadius={'md'}
      boxSize={'md'}
      boxShadow={'2xl'}
    >
      <Box boxSize={'xs'}>
        <Stack spacing={4}>
          <FormInput label="Name" value={name} setValue={setName} />
          <FormInput label="Username" value={username} setValue={setUsername} />
          <FormInput label="Password" value={password} setValue={setPassword} />
        </Stack>
        <Stack
          direction={'row'}
          align={'center'}
          spacing={6}
          justify={'center'}
        >
          <MyButton color="red" onClick={handleDelete}>
            Delete Account
          </MyButton>
          <MyButton color="green" onClick={handleUpdate}>
            Save Changes
          </MyButton>
        </Stack>
      </Box>
    </Center>
  )
}

export default SettingsPage
