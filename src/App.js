import { useContext } from 'react'
import Menu from './components/Menu'
import MobileMenu from './components/MobileMenu'
import './css/main.min.css'
import './css/normalize.css'
import { ViewContext } from './ViewContext'

function App() {

  const { view, mobile } = useContext(ViewContext)

  return (
    <div className="app">
      <main className="container">
        {view}
        {mobile ? <MobileMenu /> : < Menu />}
      </main>
    </div>
  )
}

export default App