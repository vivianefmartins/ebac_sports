import { createSlice } from '@reduxjs/toolkit'

import { Produto } from '../models/Produto'

type CartState = {
  items: Produto[]
}

const initialState: CartState = {
  items: []
}

const cartSlice = createSlice({
  name: 'cart',
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

export const { adicionar, remover } = cartSlice.actions

export default cartSlice.reducer
