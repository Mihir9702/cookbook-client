export interface CategoryItem {
  _id: string
  title: string
  image: string
  description: string
}

export interface Card extends CategoryItem {
  path: string
}

interface RecipeStr {
  idMeal: string
  strMeal: string
  strMealThumb: string
}

export interface Category {
  _id: string
  title: string
  image: string
  description: string
  recipes: RecipeStr[]
}

export interface Recipe {
  _id: string
  id: string
  title?: string
  category?: string
  image: string
  ingredients: [string, string][]
  instructions: string[]
}

export interface Doc {
  _doc: Recipe
}

export interface User {
  _id?: string
  name?: string
  username?: string
  authToken?: string
}

export interface SetUser {
  setUser: React.Dispatch<React.SetStateAction<User | undefined>>
}

export interface RecipeProduct {
  ingredient?: string[]
  text?: string
}

export interface Cart {
  id?: string | null
  cart: string[]
  setCart: React.Dispatch<React.SetStateAction<string[]>>
}
