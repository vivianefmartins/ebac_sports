import { createSlice } from '@reduxjs/toolkit'

import { Produto } from '../models/Produto'

type FavoritosState = {
  items: Produto[]
}

const initialState: FavoritosState = {
  items: []
}

const favoritosSlice = createSlice({
  name: 'favoritos',
  initialState,
  reducers: {
    adicionar(state, action) {
      state.items.push(action.payload)
    },

    remover(state, action) {
      state.items = state.items.filter(
        (produto) => produto.id !== action.payload
      )
    }
  }
})

export const { adicionar, remover } = favoritosSlice.actions

export default favoritosSlice.reducer
