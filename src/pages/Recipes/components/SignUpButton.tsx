import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Stack, Button } from '@chakra-ui/react'

const SignUpButton: React.FC = () => {
  const navigate = useNavigate()

  const handleRedirect = () => {
    navigate('/signup')
  }

  return (
    <Stack direction="row">
      <Button colorScheme="teal" variant="outline" onClick={handleRedirect}>
        Sign up to add this to cart
      </Button>
    </Stack>
  )
}

export default SignUpButton
