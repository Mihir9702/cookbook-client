import React from 'react'
import MainContent from './components/MainContent'
import { Center, Image } from '@chakra-ui/react'
import waves from 'src/assets/waves.svg'
import './HomePage.scss'

const HomePage: React.FC = () => {
  return (
    <>
      <Center>
        <MainContent />
      </Center>
      <Center className="waves-container">
        <Image src={waves} />
      </Center>
    </>
  )
}

export default HomePage
