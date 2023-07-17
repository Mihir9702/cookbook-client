import React, { FC } from 'react'
import {
  Box,
  Flex,
  Center,
  Collapse,
  IconButton,
  useDisclosure,
  useColorModeValue
} from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'
import DesktopNav from './DesktopNav'
import MobileNav from './MobileNav'
import Logo from './Logo'

const Navbar: FC = () => {
  const { isOpen, onToggle } = useDisclosure()

  return (
    <Box>
      <Flex
        bg={useColorModeValue('gray.50', 'gray.900')}
        color={useColorModeValue('gray.600', 'white')}
        minH={'4em'}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.900')}
        flexDir={'column'}
        alignItems={'flex-end'}
      >
        <Flex
          flex={{ base: 1, md: 'auto' }}
          ml={{ base: -2 }}
          display={{ base: 'flex', md: 'none' }}
          pos={'absolute'}
          right={0}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={'ghost'}
            aria-label={'Toggle Navigation'}
            pos={'absolute'}
            right={'1vw'}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
          <Logo />
          <Center display={{ base: 'none', md: 'flex' }}>
            <DesktopNav />
          </Center>
        </Flex>
        <Collapse in={isOpen} animateOpacity>
          <MobileNav />
        </Collapse>
      </Flex>
    </Box>
  )
}

export default Navbar
