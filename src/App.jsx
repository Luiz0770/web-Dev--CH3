import { Outlet } from 'react-router-dom'
import Header from './components/Header'
import MainContent from './components/MainContent'

function App() {

  return (
    <>
      <Header />
      <Outlet/>
    </>
  )
}

export default App
