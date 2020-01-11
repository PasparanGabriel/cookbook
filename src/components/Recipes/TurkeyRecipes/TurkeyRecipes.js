import React from 'react'
import { Category } from '../../Category'
import { ItemCategory } from '../../ItemCategory'
import { Loading } from '../../../ui/Loading'
import { Error } from '../../../ui/Error'

export const TurkeyRecipes = props => {
  const { baseUri, turkeyRecipes, error, loading } = props

    if (error)
    return <Error err={error} />

  if (loading)
    return <Loading />

  return (
    <Category category='Turkey'>
      { turkeyRecipes.map(turkeyRecipe =>
          <ItemCategory
            alt={turkeyRecipe.image}
            key={turkeyRecipe.id}
            src={baseUri + turkeyRecipe.imageUrls[0]}
            title={turkeyRecipe.title}
          />
        )
      }
    </Category>
  )
}