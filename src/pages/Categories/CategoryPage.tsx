import React, { useState, useEffect } from 'react'
import MySpinner from 'src/components/Spinner'
import Header from 'src/components/Header'
import RecipeStr from './components/RecipeStr'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { Center, Grid } from '@chakra-ui/react'
import { url } from 'src/services/url'
import { recipes } from '../../data/recipes'
import './Category.scss'

const CategoryPage: React.FC = () => {
  const [data, setData] = useState<any>([])
  const { category } = useParams()

  // useEffect(() => {
  //   axios
  //     .get(`${url}/catalog/categories/${category}`)
  //     .then(res => setData(res.data))
  //     .catch(err => console.error(err))
  // }, [])

  useEffect(() => {
    setData(recipes)
  }, [])

  return (
    <Center flexDir={'column'}>
      <Header title={'Recipes'} />
      <Grid className="cat-grid">
        {data && data.length === 0 && <MySpinner />}
        {data && data.map(recipe => <RecipeStr key={recipe._id} {...recipe} />)}
      </Grid>
    </Center>
  )
}

export default CategoryPage
