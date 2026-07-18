
import './App.css'
import HomePage from './pages/HomePage'
import { CartProvider } from './context/CartContext'
import CartPanel from './components/cart/CartPanel'
import { AdminProvider, useAdmin } from './context/AdminContext'
import AdminLoginPanel from './components/admin/AdminLoginPanel'
import AdminDashboard from './components/admin/AdminDashboard'

// Bascule vitrine / admin : pas de routeur dans ce projet, on choisit simplement
// quoi afficher selon l'état de connexion admin (voir AdminContext).
function ContenuApp() {
  const { estConnecte } = useAdmin()

  return (
    <div className='App'>
      {estConnecte ? (
        <AdminDashboard/>
      ) : (
        <CartProvider>
          <HomePage/>
          <CartPanel/>
        </CartProvider>
      )}
      <AdminLoginPanel/>
    </div>
  )
}

function App() {
  return (
    <AdminProvider>
      <ContenuApp/>
    </AdminProvider>
  )
}

export default App
