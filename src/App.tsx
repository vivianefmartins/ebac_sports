import Header from './components/Header'
import Produtos from './containers/Produtos'

import { GlobalStyle } from './styles'

import { Produto } from './models/Produto'

import { useDispatch, useSelector } from 'react-redux'
import { RootState } from './store'
import {
  adicionar as adicionarProdutoAoCarrinho,
  remover as removerProdutoDosFavoritos
} from './store/cart'
import { adicionar as adicionarProdutoAosFavoritos } from './store/favoritos'

import { useGetProdutosQuery } from './store/api'

function App() {
  const { data: produtos = [] } = useGetProdutosQuery()
  const carrinho = useSelector((state: RootState) => state.cart.items)
  const favoritos = useSelector((state: RootState) => state.favoritos.items)
  const dispatch = useDispatch()

  function adicionarAoCarrinho(produto: Produto) {
    if (carrinho.find((p) => p.id === produto.id)) {
      alert('Item já adicionado')
    } else {
      dispatch(adicionarProdutoAoCarrinho(produto))
    }
  }

  function favoritar(produto: Produto) {
    if (favoritos.find((p) => p.id === produto.id)) {
      dispatch(removerProdutoDosFavoritos(produto.id))
    } else {
      dispatch(adicionarProdutoAosFavoritos(produto))
    }
  }

  return (
    <>
      <GlobalStyle />
      <div className="container">
        <Header favoritos={favoritos} itensNoCarrinho={carrinho} />
        <Produtos
          produtos={produtos}
          favoritos={favoritos}
          favoritar={favoritar}
          adicionarAoCarrinho={adicionarAoCarrinho}
        />
      </div>
    </>
  )
}

export default App
