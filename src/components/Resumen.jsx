import { formatearDinero } from "../helpers";
import useQuiosco from "../hooks/useQuiosco"
import ResumenProducto from "./ResumenProducto";

function Resumen() {
  const {pedido, total, handleSubmitNuevaOrden} = useQuiosco();
  const confirmarPedido = () => pedido.length === 0;

  const handleSubmit = e => {
    e.preventDefault();

    handleSubmitNuevaOrden()
  }

  return (
    <aside className="w-72 h-screen overflow-y-scroll p-5">
      <h1 className="text-4xl font-black">
        Mis pedidos
      </h1>
      <p className="text-lg my-5">
        Aqui podras ver el resumen total de tu pedido
      </p>
      <div className="py-10">
        {pedido.length === 0 ? 
        ( <div className="text-center text-2xl">
          Sin elementos
        </div> ): 
        
        ( pedido.map(producto => (
          <ResumenProducto
          key={producto.id}
          producto={producto}
          />
        )))}
      </div>
      <p className="text-xl mt-10">
        Total: {''}
        {formatearDinero(total)}
      </p>
      <form className="w-full"
        onSubmit={handleSubmit}
      >
        <div className="mt-5">
        <div className="m-3">
          <button className="bg-white w-full text-gray-800 font-bold rounded-md border-b-4 border-green-500 hover:border-green-600 hover:bg-green-500 hover:text-white shadow-lg py-2 px-6 inline-flex items-center "
          disabled={confirmarPedido()}
          >
            <span className="mr-2">Confirmar pedido</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M2.01 21L23 12 2.0 3 2 10l15 2-15 2a"></path>
              </svg>
            </button>
          </div>
        </div>
      </form>
    </aside>
  )
}

export default Resumen
