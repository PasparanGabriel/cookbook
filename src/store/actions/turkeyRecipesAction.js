import { turkeyRecipes } from '../../config/urls'

export const turkeyRecipesAction = () => {
  return dispatch => {
    dispatch({ type: 'FETCH_TURKEYRECIPES_LOADING' })
    fetch(turkeyRecipes)
    .then(resp => resp.json())
    .then(resp => {
      if (resp.error) {
        throw(resp.error)
      }
      dispatch({ type: 'FETCH_TURKEYRECIPES_SUCCESS', resp })
    })
    .catch(error => {
      dispatch({ type: 'FETCH_TURKEYRECIPES_ERROR', error })
    })
  }
}
