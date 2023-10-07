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
import { recipes } from '../../data/recipes'

const RecipesPage = () => {
  const [data, setData] = useState<any[]>()

  const fetchData = async () => {
    try {
      await axios.get(`${url}/catalog/recipes`)
      setData(recipes)
    } catch (err) {
      console.log(err)
    }
  }

  console.log(recipes)

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <Flex flexDir={'column'} justify={'center'} align={'center'}>
      <h2 className="cat-t">Recipes</h2>
      <Grid className="cat-grid">
        {!recipes ? (
          <MySpinner />
        ) : (
          recipes.map(recipe => (
            <GridItem
              key={recipe.id}
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
