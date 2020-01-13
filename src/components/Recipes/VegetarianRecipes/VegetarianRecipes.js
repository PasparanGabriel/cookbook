import React from 'react'
import { Category } from '../../Category'
import { Error } from '../../../ui/Error'
import { ItemCategory } from '../../ItemCategory'
import { Loading } from '../../../ui/Loading'

export const VegetarianRecipes = props => {
  const { baseUri, vegetarianRecipes, error, loading } = props

  if (error)
    return <Error err={error} />

  if (loading)
    return <Loading />

  if (vegetarianRecipes) {
    return (
      <Category category='Vegetarian'>
        { vegetarianRecipes && vegetarianRecipes.map(vegetarianRecipe =>
            <ItemCategory
              alt={vegetarianRecipe.image}
              key={vegetarianRecipe.id}
              onClick={() => alert(vegetarianRecipe.id)}
              servings={vegetarianRecipe.servings}
              src={baseUri + vegetarianRecipe.image}
              readyInMinutes={vegetarianRecipe.readyInMinutes}
              title={vegetarianRecipe.title}
            />
          )
        }
      </Category>
    )
  } else {
    return <Loading />
  }
}