import { combineReducers } from 'redux'
import { firebaseReducer } from 'react-redux-firebase'
import { firestoreReducer } from 'redux-firestore'
import { authReducer } from './authReducer'
import { beefRecipesReducer } from './beefRecipesReducer'
import { chickenRecipesReducer } from './chickenRecipesReducer'
import { instructionRecipesReducer } from './instructionRecipesReducer'
import { maxCaloriesRecipesReducer } from './maxCaloriesRecipesReducer'
import { porkRecipesReducer } from './porkRecipesReducer'
import { tenMinutesRecipesReducer } from './tenMinutesRecipesReducer'
import { turkeyRecipesReducer } from './turkeyRecipesReducer'
import { vegetarianRecipesReducer } from './vegetarianRecipesReducer'

export const rootReducer = combineReducers({
  auth: authReducer,
  beefRecipes: beefRecipesReducer,
  chickenRecipes: chickenRecipesReducer,
  instructionRecipes: instructionRecipesReducer,
  maxCaloriesRecipes: maxCaloriesRecipesReducer,
  porkRecipes: porkRecipesReducer,
  tenMinutesRecipes: tenMinutesRecipesReducer,
  turkeyRecipes: turkeyRecipesReducer,
  vegetarianRecipes: vegetarianRecipesReducer,
  firebase: firebaseReducer,
  firestore: firestoreReducer
})
