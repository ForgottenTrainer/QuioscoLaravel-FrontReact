import { Outlet } from 'react-router-dom'
import Sidebar from '../components/Sidebar'
import Resumen from '../components/Resumen'
import useQuiosco from '../hooks/useQuiosco'
import Modal from 'react-modal'
import { ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"
import ModalProducto from '../components/ModalProducto'
import { useAuth } from '../hooks/useAuth'

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement('#root');

const Layout = () => {

  const {user, error} = useAuth({middleware: 'auth'})
  const { modal } = useQuiosco();

  return (
    <>
      <div className='md:flex'>
        <Sidebar/>
        <main className="flex-1 h-screen overflow-y-scroll bg-rose-50 p-3">
          <Outlet />
        </main>
        <Resumen/>
      </div>
      {modal && (
        <Modal isOpen={modal} style={customStyles}>
          <ModalProducto />
        </Modal>
      )}
      <ToastContainer />
    </>
  )
}

export default Layout
