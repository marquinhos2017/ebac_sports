import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../../App'

type FavoritoState = {
  itens: Produto[]
}

const initialState: FavoritoState = {
  itens: []
}

const favoritoSlice = createSlice({
  name: 'favorito',
  initialState,
  reducers: {
    adicionar: (state, action: PayloadAction<Produto>) => {
      const jogo = action.payload

      if (state.itens.find((Produto) => Produto.id === jogo.id)) {
        alert('Item ja adicionado')
      } else {
        state.itens.push(jogo)
      }
    }
  }
})

export const { adicionar } = favoritoSlice.actions
export default favoritoSlice.reducer
