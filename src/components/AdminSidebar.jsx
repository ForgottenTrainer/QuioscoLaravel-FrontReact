import { Link } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'

const AdminSidebar = () => {
  const { logout } = useAuth({middleware: 'auth'})
  return (
    <aside className='md:w-72 h-screen'>
      <div className="p-4">
        <img src="/img/candy.png" alt="logo" className='w-40' />
      </div>
      <nav className='flex flex-col p-4'>
        <Link to="/admin" className='font-bold text-lg'>Ordenes</Link>
        <Link to="/admin/productos" className='font-bold text-lg'>Productos</Link>
      </nav>
      <div className="my-5 px-5">
      <button type="button" className="w-full text-xl font-bold focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 uppercase rounded-lg px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"  onClick={logout}>
        Cerrar
      </button>
      </div>
    </aside>
  )
}

export default AdminSidebar
