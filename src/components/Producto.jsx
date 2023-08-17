import { formatearDinero } from "../helpers";
import useQuiosco from "../hooks/useQuiosco";


function Producto({producto, botonAgregar = false, botonDisponible = false}) {
    const {nombre, imagen, precio} = producto;
    const { handleClickModal, handleSetProducto, handleClickProductoAgotado} = useQuiosco()

    return (
        <div className="border p-3 shadow bg-slate-100">
            <img src={`/img/${imagen}.jpg`} alt={`Imagen ${nombre}`} />
            <div className="p-5">
                <h3 className="text-2xl font-black">{nombre}</h3>
                <p className="mt-5 font-bold text-4xl text-indigo-500">
                    {formatearDinero(precio)}
                </p>
                {botonAgregar && (
                    <button type="button" className="font-bold bg-purple-600 hover:bg-purple-800 transition-all uppercase text-white p-3 cursor-pointer mt-5 rounded-md"
                    onClick={() => {
                        handleClickModal();
                        handleSetProducto(producto);
                    }}
                    >
                        Agregar al carrito
                    </button>
                )}

                {botonDisponible && (
                    <button type="button" className="font-bold bg-purple-600 hover:bg-purple-800 transition-all uppercase text-white p-3 cursor-pointer mt-5 rounded-md"
                    onClick={() => {
                        handleClickProductoAgotado(producto.id)
                    }}
                    >
                        Sin producto
                    </button>
                )}                

            </div>
        </div>
    )
}

export default Producto
