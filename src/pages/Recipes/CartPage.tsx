import React, { FC, FormEvent, useEffect, useState } from 'react'
import MyButton from '../../components/MyButton'
import CartGrid from './CartGrid'
import { useParams, useNavigate } from 'react-router-dom'
import { post } from 'src/services/service'
import type { Cart } from 'src/components/interfaces'
import { Flex, Center, useColorModeValue } from '@chakra-ui/react'
import { ChevronRightIcon, DeleteIcon } from '@chakra-ui/icons'

// @ts-ignore
const CartPage: FC<Cart> = ({ cart, setCart }) => {
  const { username } = useParams()
  const [unique] = useState([...new Set(cart)])
  const navigate = useNavigate()

  const user = localStorage.getItem('username')

  const handleNavigation = () => {
    navigate(`/`)
    location.reload()
  }

  const clearCart = () => {
    localStorage.removeItem('cart')
    setCart([])
    handleNavigation()
  }

  const handleCreate = () => {
    post(`/cookbook/${user}/my-cookbook`, { recipes: unique, owner: user })
    clearCart()
    handleNavigation()
  }

  const handleDelete = (e: FormEvent) => {
    localStorage.removeItem('cart')
    handleNavigation()
  }

  useEffect(() => {
    if (!user || user !== username) handleNavigation()
  }, [])

  return (
    <Center
      pos={'absolute'}
      bottom={0}
      top={0}
      left={0}
      right={0}
      bg={useColorModeValue('gray.100', 'gray.800')}
    >
      <Center
        boxSize={'lg'}
        border={'2px solid'}
        borderColor={useColorModeValue('gray.100', 'gray.900')}
        rounded={'3xl'}
        pos={'relative'}
        boxShadow={useColorModeValue('lg', 'dark-lg')}
        zIndex={0}
        bg={useColorModeValue('gray.50', 'gray.700')}
      >
        <CartGrid unique={unique} />
        <Flex pos={'absolute'} bottom={0} display={'flex'} gap={'4em'}>
          <MyButton color="red" onClick={handleDelete}>
            <DeleteIcon mr={4} fontSize={'xl'} /> Delete Cart
          </MyButton>
          <MyButton color="green" onClick={handleCreate}>
            Create Cookbook
            <ChevronRightIcon ml={2} fontSize={'2xl'} />
          </MyButton>
        </Flex>
      </Center>
    </Center>
  )
}

export default CartPage
