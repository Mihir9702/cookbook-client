import React, { useState } from 'react'
import { Stack, Button, Link } from '@chakra-ui/react'
import { AddIcon, ArrowBackIcon, ArrowLeftIcon } from '@chakra-ui/icons'

interface Props {
  handleCart: () => void
}

const AddButton: React.FC<Props> = ({ handleCart }) => {
  const [a, A] = useState(false)

  const removeButton = () => {
    A(!a)
    handleCart()
  }

  return (
    <Stack direction="row" spacing={4}>
      {!a ? (
        <Button colorScheme="teal" variant="solid" onClick={removeButton}>
          <AddIcon />
        </Button>
      ) : (
        <Button colorScheme="blue" variant="solid" onClick={removeButton}>
          <Link href="/recipes">
            <ArrowBackIcon />
          </Link>
        </Button>
      )}
    </Stack>
  )
}

export default AddButton
