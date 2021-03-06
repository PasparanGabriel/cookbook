const initialState = {
  error: '',
  loading: false,
  results: []
}

export const porkRecipesReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'FETCH_PORKRECIPES_LOADING': 
      return {
        ...state,
        loading: true
      }

    case 'FETCH_PORKRECIPES_SUCCESS':
      return {
        ...state,
        loading: false,
        results: action.resp.results

      }
    case 'FETCH_PORKRECIPES_ERROR':
      return {
        ...state,
        error: action.error,
        loading: false,
        results: []
      }

    default: 
      return state
  }
}
