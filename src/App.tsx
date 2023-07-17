import React from 'react'
import Error from './pages/Error'
import Navbar from './pages/Home/components/Navbar'
import CartPage from './pages/Recipes/CartPage'
import HomePage from './pages/Home/HomePage'
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'
import LogoutPage from './pages/LogoutPage'
import RecipePage from './pages/Recipes/RecipePage'
import RecipesPage from './pages/Recipes/RecipesPage'
import SettingsPage from './pages/SettingsPage'
import CookbookPage from './pages/CookbookPage'
import CategoryPage from './pages/Categories/CategoryPage'
import CategoriesPage from './pages/Categories/CategoriesPage'
import LoggedInNavbar from './components/LoggedInNavbar'
import MyCookbooksPage from './pages/MyCookbooksPage'
import { Route, Routes } from 'react-router-dom'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import { Center, useColorMode, Button } from '@chakra-ui/react'
import './App.scss'

const App: React.FC = () => {
  const { colorMode, toggleColorMode } = useColorMode()

  const [cart, setCart] = React.useState<string[]>(
    // @ts-ignore
    JSON.parse(localStorage.getItem('cart')) || []
  )

  const id = localStorage.getItem('id')

  return (
    <>
      <Center w={'100%'} pos={'absolute'} top={2}>
        <Button onClick={toggleColorMode} zIndex={100} variant={'ghost'}>
          {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
        </Button>
      </Center>

      {id ? <LoggedInNavbar /> : <Navbar />}

      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/logout" element={<LogoutPage />} />

        <Route path="/categories" element={<CategoriesPage />} />
        <Route path="/categories/:category" element={<CategoryPage />} />

        <Route path="/recipes" element={<RecipesPage />} />
        <Route
          path="/recipes/:recipe"
          element={<RecipePage id={id} cart={cart} setCart={setCart} />}
        />

        <Route
          path="/:username/cart"
          element={<CartPage cart={cart} setCart={setCart} />}
        />
        <Route path="/:user/settings" element={<SettingsPage />} />
        <Route path="/:user/my-cookbooks" element={<MyCookbooksPage />} />
        <Route path="/:user/my-cookbooks/:id" element={<CookbookPage />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  )
}

export default App
