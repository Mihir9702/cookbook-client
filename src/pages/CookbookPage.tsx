import React, { useState, useEffect, FC } from 'react'
import { useParams } from 'react-router-dom'
import { get } from 'src/services/service'
import type { Recipe } from 'src/components/interfaces'
import { Container } from '@chakra-ui/react'
import Cookbook from './Cookbook'

const CookbookPage: FC = () => {
  const { id } = useParams()
  const [cookbook, setCookbook] = useState<Recipe[]>()

  const fetchCookbook = async () => {
    const response = await get(`/cookbook/${id}`)
    setCookbook(response.data)
  }

  useEffect(() => {
    fetchCookbook()
  }, [])

  return (
    <Container>
      <Cookbook book={cookbook}></Cookbook>
    </Container>
  )
}

export default CookbookPage
