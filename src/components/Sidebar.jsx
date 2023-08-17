import useQuiosco from "../hooks/useQuiosco"
import Categoria from "./Categoria"
import { useAuth } from "../hooks/useAuth"

function Sidebar() {
    const {logout, user} = useAuth({middleware: 'auth'})
    const { categorias } = useQuiosco()

  return (
    <aside className="md:w-72">
        <div className="p-4">
            <img src="img/candy.png" alt="logo"
            className="w-40" />
        </div>
        <p className="my-10 text-center text-xl font-bold">Hola: {user?.name}</p>
        <div className="mt-10">
            {categorias.map(categoria => (
                <Categoria 
                key={categoria.id}
                    categoria={categoria}
                />
            ))}
        </div>
        <button 
        type="button" 
        className="text-center text-white uppercase font-bold bg-red-500 w-full truncate p-3 cursor-pointer"
        onClick={logout}
        >
            Cancelar orden
        </button>
    </aside>
  )
}

export default Sidebar
