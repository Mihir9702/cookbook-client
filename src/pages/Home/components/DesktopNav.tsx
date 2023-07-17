import React from 'react'
import {
  Box,
  Text,
  Link,
  Stack,
  Popover,
  PopoverContent,
  PopoverTrigger,
  useColorModeValue
} from '@chakra-ui/react'
import NAVITEMS from './NavItems'
import type { NavItem } from './NavItems'

const DesktopNav: React.FC = () => {
  const linkColor = useColorModeValue('gray.600', 'gray.200')
  const linkHoverColor = 'pink.500'
  const popoverContentBgColor = useColorModeValue('white', 'gray.800')

  return (
    <Stack zIndex={'2000 !important'} direction={'row'} spacing={4}>
      {NAVITEMS.map(navItem => (
        <Box key={navItem.label}>
          <Popover trigger={'hover'} placement={'bottom-start'}>
            <PopoverTrigger>
              <Link
                p={2}
                href={navItem.href && navItem.href}
                fontSize={'sm'}
                fontWeight={600}
                color={linkColor}
                border={navItem.label === 'Sign up' ? '1px' : 0}
                borderColor={linkColor}
                cursor="pointer"
                _hover={{
                  textDecoration: 'none',
                  color: linkHoverColor,
                  borderColor: linkHoverColor
                }}
              >
                {navItem.label}
              </Link>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={'xl'}
                bg={popoverContentBgColor}
                p={4}
                rounded={'xl'}
                minW={'sm'}
              >
                <Stack>
                  {navItem.children.map(child => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  )
}

const DesktopSubNav = ({ label, href, subLabel }: NavItem) => {
  return (
    <Link
      href={href}
      role={'group'}
      display={'block'}
      p={2}
      rounded={'md'}
      cursor="pointer"
      _hover={{ bg: useColorModeValue('pink.50', 'gray.900') }}
    >
      <Stack direction={'row'} align={'center'}>
        <Box>
          <Text
            transition={'all .3s ease'}
            _groupHover={{ color: 'pink.400' }}
            fontWeight={500}
          >
            {label}
          </Text>
          <Text fontSize={'sm'}>{subLabel}</Text>
        </Box>
      </Stack>
    </Link>
  )
}

export default DesktopNav
