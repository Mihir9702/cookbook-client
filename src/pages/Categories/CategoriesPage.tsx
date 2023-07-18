import React, { useState, useEffect } from 'react'
import axios from 'axios'
import CategoriesCard from './components/CategoriesCard'
import MySpinner from 'src/components/Spinner'
import Header from 'src/components/Header'
import { url } from 'src/services/url'
import type { CategoryItem } from 'src/components/interfaces'
import { Container, Grid, GridItem } from '@chakra-ui/react'
import categories from '../../data/categories.json'
import './CategoriesPage.scss'

const CategoriesPage: React.FC = () => {
  // const [data, setData] = useState<CategoryItem[]>([])

  // useEffect(() => {
  //   axios
  //     .get(`${url}/catalog/categories`)
  //     .then(res => setData(res.data))
  //     .catch(err => console.error(err))
  // }, [])

  const [data, setData] = useState<any[]>([])

  useEffect(() => {
    setData(categories)
  }, [])

  return (
    <>
      {data.length === 0 ? <MySpinner /> : (
        <Container>
          <Header title={'Categories'} />
          {data.map(item =>  
            <Grid className="grid">
              <CategoriesCard key={item._id} {...item} />
            </Grid>
          )}
        </Container>
      )}
    </>
  )
}

export default CategoriesPage
