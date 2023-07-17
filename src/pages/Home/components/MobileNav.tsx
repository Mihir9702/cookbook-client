import React, { FC } from 'react'
import { ChevronDownIcon } from '@chakra-ui/icons'
import {
  Flex,
  Icon,
  Link,
  Text,
  Stack,
  Collapse,
  useDisclosure,
  useColorModeValue
} from '@chakra-ui/react'
import type { NavItem } from './NavItems'
import NAVITEMS from './NavItems'

const MobileNav: FC = () => {
  return (
    <Stack
      bg={useColorModeValue('white', 'gray.800')}
      p={14}
      mt={14}
      border={'.1em solid'}
      borderColor={useColorModeValue('gray.100', 'gray.600')}
      w={'100vw'}
      left={4}
      top={2}
      ml={3}
      pos={'relative'}
      display={{ md: 'none' }}
    >
      {NAVITEMS.map(navItem => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  )
}

const MobileNavItem = ({ label, children, href }: NavItem) => {
  const { isOpen, onToggle } = useDisclosure()

  return (
    <Stack
      onClick={children && onToggle}
      borderColor={useColorModeValue('gray.200', 'gray.500')}
    >
      <Flex
        py={2}
        px={2}
        as={Link}
        href={href}
        my={2}
        justify={'center'}
        align={'center'}
        border={'.1em solid'}
        borderRadius={'.5em'}
        borderColor={'pink.400'}
        _hover={{
          textDecoration: 'none',
          bg: useColorModeValue('gray.50', 'gray.700')
        }}
      >
        <Text
          fontWeight={600}
          color={useColorModeValue('gray.600', 'gray.200')}
        >
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={'all .25s ease-in-out'}
            transform={isOpen ? 'rotate(180deg)' : ''}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
        <Stack
          mt={2}
          pl={4}
          userSelect={'all'}
          borderLeft={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.700')}
          align={'start'}
        >
          {children &&
            children.map(child => (
              <Link
                key={child.label}
                zIndex={100}
                px={2}
                py={2}
                w={'100%'}
                cursor="pointer"
                href={child.href}
                borderRadius={'.5em'}
                _hover={{
                  textDecor: 'none',
                  bg: useColorModeValue('gray.100', 'gray.600')
                }}
              >
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  )
}

export default MobileNav
