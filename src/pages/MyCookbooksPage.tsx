import React, { useEffect, useState } from 'react'
import { get } from 'src/services/service'
import { Center, Grid, GridItem } from '@chakra-ui/react'
import MySpinner from 'src/components/Spinner'
import MyCookbooks from './MyCookbooks'

/*
 * cb => Cookbook
 * cbs => Cookbooks
 */
const MyCookbooksPage = () => {
  const [cbs, setCbs] = useState([])
  const user = localStorage.getItem('username')

  const fetchUser = async () => {
    const response = await get(`/cookbook/${user}/my-cookbook`)
    setCbs(response.data)
  }

  useEffect(() => {
    fetchUser()
  }, [])

  console.log(cbs)

  return (
    <Center flexDir={'column'}>
      <Grid className="cat-grid" px={8} py={8} templateRows={'max-content'}>
        {cbs.length === 0 ? (
          <MySpinner />
        ) : (
          <GridItem mt={'8px'}>
            {cbs.map((cb, i) => (
              <MyCookbooks key={cb._id} cb={cb} i={i} />
            ))}
          </GridItem>
        )}
      </Grid>
    </Center>
  )
}

export default MyCookbooksPage
