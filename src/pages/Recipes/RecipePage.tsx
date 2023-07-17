import React, { FC } from 'react'
import RecipeComponent from './components/RecipeComponent'
import type { Cart } from 'src/components/interfaces'

const RecipePage: FC<Cart> = ({ id, cart, setCart }) => {
  return <RecipeComponent id={id} cart={cart} setCart={setCart} />
}

export default RecipePage
