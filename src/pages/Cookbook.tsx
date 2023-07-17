import React, { FC, useState } from 'react'
import Slider from 'react-slick'
import {
  Box,
  Text,
  Flex,
  Image,
  Stack,
  Heading,
  Container,
  IconButton,
  useBreakpointValue
} from '@chakra-ui/react'
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons'
import type { Recipe } from 'src/components/interfaces'

const settings = {
  dots: true,
  fade: true
}

interface Props {
  book: Recipe[]
}

const Cookbook: FC<Props> = ({ book }) => {
  const [slider, setSlider] = useState<Slider | null>(null)
  const top = useBreakpointValue({ base: '90%', md: '50%' })
  const side = useBreakpointValue({ base: '30%', md: '40px' })

  return (
    <Box position={'relative'} height={'100%'}>
      <IconButton
        aria-label="left-arrow"
        variant="ghost"
        pos="absolute"
        right={side}
        top={top}
        transform={'translate(200%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickPrev()}
      >
        <ChevronRightIcon fontSize={'5xl'} color="black" />
      </IconButton>
      <IconButton
        aria-label="right-arrow"
        variant="ghost"
        pos="absolute"
        left={side}
        top={top}
        transform={'translate(-200%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickPrev()}
      >
        <ChevronLeftIcon fontSize={'5xl'} />
      </IconButton>
      <Slider {...settings} ref={slider => setSlider(slider)}>
        {book?.map((recipe, index) => (
          <Box key={index} height={'6xl'} position="relative">
            <Image src={recipe.image} alt="food" />
            <Container size="container.lg" height="600px" position="relative">
              <Stack spacing={6} textAlign="center" position="relative">
                <Heading fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}>
                  {recipe.title}
                </Heading>
                <Text fontSize={{ base: 'md', lg: 'md' }} color="GrayText">
                  {recipe.instructions}
                </Text>
                <Flex flexDirection={'column'}>
                  {recipe.ingredients.map(ingredient => (
                    <Text fontSize={{ base: 'md', lg: 'md' }} color="GrayText">
                      {ingredient}
                    </Text>
                  ))}
                </Flex>
              </Stack>
            </Container>
          </Box>
        ))}
      </Slider>
    </Box>
  )
}

export default Cookbook
