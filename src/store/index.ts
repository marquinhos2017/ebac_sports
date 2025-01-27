import { configureStore } from '@reduxjs/toolkit'

import carrinhoReducer from './reducers/carrinho'
import favoritoReducer from './reducers/favorito'

export const store = configureStore({
  reducer: {
    carrinho: carrinhoReducer,
    favorito: favoritoReducer
  }
})

export type RootReducer = ReturnType<typeof store.getState>
