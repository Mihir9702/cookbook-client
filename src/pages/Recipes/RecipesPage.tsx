import React, { useState, useEffect } from 'react'
import axios from 'axios'
import MySpinner from 'src/components/Spinner'
import type { Recipe } from 'src/components/interfaces'
import { url } from 'src/services/url'
import {
  Flex,
  Grid,
  Link,
  Image,
  Heading,
  GridItem,
  useColorModeValue
} from '@chakra-ui/react'

const RecipesPage = () => {
  const [data, setData] = useState<Recipe[]>()

  const fetchData = async () => {
    try {
      const response = await axios.get(`${url}/catalog/recipes`)
      setData(response.data)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <Flex flexDir={'column'} justify={'center'} align={'center'}>
      <h2 className="cat-t">Recipes</h2>
      <Grid className="cat-grid">
        {!data ? (
          <MySpinner />
        ) : (
          data.map(recipe => (
            <GridItem
              key={recipe._id}
              className="cat-col"
              border={'1px solid'}
              borderColor={useColorModeValue('pink.300', 'pink.500')}
              as={Link}
              href={`/recipes/${recipe.title}`}
            >
              <Heading className="g-t">{recipe.title}</Heading>
              <Image src={recipe.image} borderRadius={'10px'} />
            </GridItem>
          ))
        )}
      </Grid>
    </Flex>
  )
}

export default RecipesPage
