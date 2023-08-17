import useQuiosco from "../hooks/useQuiosco"

const Categoria = ({categoria}) => {
    const {icono, id, nombre} = categoria
    const { handleClickCategoria, categoriaActual } = useQuiosco()
  return (
    <div className={`${categoriaActual.id === id ? "bg-indigo-500 text-white" : "bg-white"} flex items-center gap-4 border w-full p-3 hover:bg-indigo-500 cursor-pointer transition-all`}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6">
            <path fillRule="evenodd" d="M4.72 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L11.69 12 4.72 5.03a.75.75 0 010-1.06zm6 0a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06L17.69 12l-6.97-6.97a.75.75 0 010-1.06z" clipRule="evenodd" />
        </svg>
        <button className="text-lg font-bold cursor-pointer truncate" 
        type="button"
        onClick={() => handleClickCategoria(id)}>
          {nombre}
        </button>
    </div>
  )
}

export default Categoria
