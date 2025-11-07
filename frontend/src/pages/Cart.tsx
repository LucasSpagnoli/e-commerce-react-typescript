import { useContext, type JSX } from 'react'
import { CartContext } from '../context/cartContext'
import { ProductInCart } from '../components/ProductInCart'

export function Cart(): JSX.Element {
  const { cart, totalCost, clearCart } = useContext(CartContext)

  return (
    <main>
      <div className="md:ms-16 ms-8 mt-6 md:mt-12">
        <h2 className="text-2xl font-semibold">Seu carrinho</h2>
        <p className="mt-2 text-gray-600">Revise seus produtos antes de finalizar.</p>
      </div>

      {cart.length === 0 ? (
        <section className="flex flex-col items-center justify-center text-center bg-gray-100 rounded-xl sombra w-4/5 mx-auto my-16 py-20 px-6">
          <img
            src="https://cdn-icons-png.flaticon.com/512/2038/2038854.png"
            alt="Carrinho vazio"
            className="w-28 h-28 mb-6 opacity-80"
          />
          <h3 className="text-2xl font-semibold text-gray-800 mb-2">
            Seu carrinho está vazio
          </h3>
          <p className="text-gray-600 mb-6">
            Parece que você ainda não adicionou nenhum produto.
          </p>
          <a
            href="/"
            className="btn text-white rounded-lg text-sm px-5 py-2 font-medium"
          >
            Voltar à loja
          </a>
        </section>
      ) : (
        <section className="sombra rounded-xl bg-gray-100 my-10 mx-auto w-4/5 p-6">
          <ul className="flex flex-col items-center gap-4">
            {cart.map(product => (
              <ProductInCart key={product.id} cartProduct={product} />
            ))}
          </ul>

          <div className="flex justify-between items-center mt-8 border-t pt-5">
            <span className="text-lg font-semibold text-gray-800">
              Total: ${totalCost.toFixed(2)}
            </span>
            <button
              className="btn text-white rounded-lg text-sm px-4 py-2 font-medium"
              onClick={clearCart}
            >
              Limpar carrinho
            </button>
          </div>
        </section>
      )}
    </main>
  )
}
