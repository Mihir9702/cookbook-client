import React, { FC } from 'react'
import {
  Box,
  Flex,
  Link,
  Menu,
  Text,
  Stack,
  Center,
  Avatar,
  Collapse,
  MenuList,
  MenuItem,
  MenuButton,
  MenuDivider,
  useDisclosure,
  useColorModeValue
} from '@chakra-ui/react'
import {
  ViewIcon,
  SettingsIcon,
  ChevronDownIcon,
  ExternalLinkIcon
} from '@chakra-ui/icons'
import Logo from '../pages/Home/components/Logo'
import cartIcon from 'src/assets/carticon.png'

const LoggedInNavbar: FC = () => {
  const colorModeValue700 = useColorModeValue('gray.50', 'gray.700')
  const colorModeValue600 = useColorModeValue('gray.50', 'gray.600')
  const name = localStorage.getItem('name')
  const username = localStorage.getItem('username')
  const { isOpen, onToggle } = useDisclosure()

  return (
    <>
      <Box bg={colorModeValue700} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={8}>
              <Menu>
                <MenuItem justifyContent={'center'}>
                  <Link
                    pos={'absolute'}
                    right={24}
                    p={1}
                    rounded={'3xl'}
                    href={`/${username}/cart`}
                    cursor="pointer"
                    _hover={{
                      bg: useColorModeValue('gray.200', 'gray.700')
                    }}
                  >
                    <img
                      src={cartIcon}
                      alt="icon"
                      style={{
                        width: '2em',
                        filter: useColorModeValue('invert(0)', 'invert(100%)')
                      }}
                    />
                  </Link>
                </MenuItem>
                <Logo />
                <MenuButton
                  rounded={'full'}
                  pos={'absolute'}
                  right={0}
                  top={0}
                  transform={'translate(-50%, 50%)'}
                  zIndex={1}
                >
                  <Avatar size={'sm'} />
                </MenuButton>
                <MenuList
                  className="menu-links"
                  alignItems={'center'}
                  border={'1px'}
                  borderColor={'blackAlpha.500'}
                >
                  <br />
                  <Center>
                    <Avatar size={'2xl'} />
                  </Center>
                  <br />
                  <Center>
                    <Text fontWeight={'medium'}>{name}</Text>
                  </Center>
                  <br />
                  <MenuDivider borderColor={'gray.600'} />
                  <Flex
                    pos={'relative'}
                    flexDir={'column'}
                    justifyContent={'center'}
                    align={'center'}
                    onClick={onToggle}
                  >
                    <Center
                      _hover={{
                        bg: colorModeValue600,
                        width: '100%'
                      }}
                    >
                      <Text>View Catalog</Text>
                    </Center>
                    <ChevronDownIcon
                      pos={'absolute'}
                      left={2}
                      top={0}
                      fontSize={'2xl'}
                    />
                    <Collapse in={isOpen}>
                      <Center
                        my={2}
                        _hover={{
                          bg: colorModeValue600
                        }}
                      >
                        <Link cursor={'pointer'} href="/categories">
                          Categories
                        </Link>
                      </Center>
                      <Center
                        my={2}
                        _hover={{
                          bg: colorModeValue600
                        }}
                      >
                        <Link cursor={'pointer'} href="/recipes">
                          Recipes
                        </Link>
                      </Center>
                    </Collapse>
                  </Flex>
                  <MenuItem justifyContent={'center'}>
                    <ViewIcon pos={'relative'} mr={'auto'} />
                    <Link
                      cursor={'pointer'}
                      pos={'absolute'}
                      href={`/${username}/my-cookbooks`}
                    >
                      My Cookbooks
                    </Link>
                  </MenuItem>
                  <MenuItem justifyContent={'center'}>
                    <SettingsIcon pos={'relative'} mr={'auto'} />
                    <Link
                      cursor={'pointer'}
                      pos={'absolute'}
                      href={`/${username}/settings`}
                    >
                      Settings
                    </Link>
                  </MenuItem>
                  <MenuItem justifyContent={'center'}>
                    <ExternalLinkIcon pos={'relative'} mr={'auto'} />
                    <Link cursor={'pointer'} pos={'absolute'} href="/logout">
                      Logout
                    </Link>
                  </MenuItem>
                </MenuList>
              </Menu>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  )
}

export default LoggedInNavbar
