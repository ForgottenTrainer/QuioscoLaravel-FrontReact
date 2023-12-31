import { useState, useEffect } from "react"
import useQuiosco from "../hooks/useQuiosco"
import { formatearDinero } from "../helpers/index"


const ModalProducto = () => {
    const { producto, handleClickModal, handleAgregarPedido, pedido} = useQuiosco();
    const [cantidad, setCantidad ] = useState(1);
    const [edicion, setEdicion] = useState(false);
    useEffect(() => {
        if(pedido.some(pedidoState => pedidoState.id === producto.id)){
            const productoEdicion = pedido.filter(pedidoState => pedidoState.id === producto.id)[0]
            
            setCantidad(productoEdicion.cantidad)
            setEdicion(true)
        }
    }, [pedido])

  return (
    <div className="md:flex gap-10">
        <div className="md:w-1/3">
            <img src={`/img/${producto.imagen}.jpg`} alt={`Imagen ${producto.nombre}`} />
        </div>
        <div className="md:w-2/3">
            <div className="flex justify-end">
                <button onClick={handleClickModal}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-red-100 bg-red-600 shadow-md rounded-full">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
            <h1 className="text-3xl font-bold mt-5"> 
                { producto.nombre } 
            </h1>
            <p className="mt-5 font-black text-5xl text-indigo-500">
               { formatearDinero(producto.precio)}
            </p>

            <div className="flex gap-4 mt-5">

                <button type="button" onClick={() => {
                    if(cantidad <= 1) return
                    setCantidad (cantidad - 1)             
                }}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                   
                </button>

                <p className="text-2xl text-black">{cantidad}</p>
                
                <button type="button" onClick={() => {
                    if(cantidad >= 5) return
                    setCantidad (cantidad + 1)
                }}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </button>
            </div>

            <button type="button" className="bg-slate-600 hover:bg-slate-800 text-white uppercase font-bold rounded p-3 mt-5 transition-all"
            onClick={() => {
                handleAgregarPedido({...producto, cantidad})
                handleClickModal()
                }}
            >
                {edicion ? 'Guardar cambios' : 'Añadir al pedido'}
            </button>
        </div>
    </div>
    
  )
}

export default ModalProducto
