import useSWR from 'swr'
import clienteAxios from '../config/axios'
import useQuiosco from '../hooks/useQuiosco'

const Ordenes = () => {
  const token = localStorage.getItem('AUTH_TOKEN')
  const fetcher = () => clienteAxios('/api/pedidos', {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
  const {data, error, isLoading} = useSWR('/api/pedidos', fetcher, {refreshInterval: 1000})
  const {handleClickCompletarPedido} = useQuiosco()
  if(isLoading) return 'Obteniendo informacion'  
  if (error) return 'Hubo un error al obtener la informacion';
  return (
    <div>
      <h1 className="text-4xl font-black">Ordenes</h1>
      <p className='text-2xl my-10'>Administra tus ordenes aqui</p>
      <div className='grid grid-cols-2'>
        {data.data.data.map(pedido => (
          <div key={pedido.id} className="p-5 ml-2 mt-2 bg-white shadow space-y-2 border-b">
            <p className="text-xl font-bold text-slate-600">
              Contenido del pedido:
            </p>
            {pedido.productos.map(producto => (
              <div className="border-b border-b-slate-200 last-of-type:border p-4" 
              key={producto.id}>
                <p className="text-sm">ID: {producto.id} </p>
                <div> {producto.nombre} </div>
                <p className="">
                  Cantidad: {''}
                  <span className="font-bold"> {producto.pivot.cantidad} </span>
                </p>
              </div>
            ))}
            <p className='text-lg font-bold text-slate-600 mb-2'>
              Cliente: 
              <span className="font-normal"> {pedido.user.name} </span>
            </p>
            <p className='text-lg font-bold text-purple-600 mb-2'>
              Total: 
              <span className="font-normal text-slate-600">$ {pedido.total} </span>
            </p>
            <button
            className='bg-indigo-600 hover:bg-indigo-800 px-5 py-2 rounded-md uppercase font-bold text-white text-center w-full cursor-pointer'
            onClick={() => handleClickCompletarPedido(pedido.id)}
            >
              Completar
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Ordenes
