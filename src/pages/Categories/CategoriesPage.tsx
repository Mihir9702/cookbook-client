import React, { useState, useEffect } from 'react'
import axios from 'axios'
import CategoriesCard from './components/CategoriesCard'
import MySpinner from 'src/components/Spinner'
import Header from 'src/components/Header'
import { url } from 'src/services/url'
import type { CategoryItem } from 'src/components/interfaces'
import { Grid } from '@chakra-ui/react'
import './CategoriesPage.scss'

const CategoriesPage: React.FC = () => {
  const [data, setData] = useState<CategoryItem[]>([])
  useEffect(() => {
    axios
      .get(`${url}/catalog/categories`)
      .then(res => setData(res.data))
      .catch(err => console.error(err))
  }, [])

  return (
    <>
      {data.length === 0 ? (
        <MySpinner />
      ) : (
        <>
          <Header title={'Categories'} />
          <Grid className="grid">
            {data.map(category => (
              <CategoriesCard
                key={category._id}
                path="/categories"
                {...category}
              />
            ))}
          </Grid>
        </>
      )}
    </>
  )
}

export default CategoriesPage
