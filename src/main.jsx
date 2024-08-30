import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainContent from './components/MainContent/index.jsx'
import Sobre from './pages/Sobre.jsx'
import Contato from './pages/Contato.jsx'
import PageNotFound from './pages/PageNotFound.jsx'

const router = createBrowserRouter([
    {
      path: '/',
      element: <App/>,
      children: [
        {index: true, element: <MainContent/>},
        {path: 'sobre', element: <Sobre/>},
        {path: 'contato', element: <Contato/>},
        {path: '*', element: <PageNotFound/>},
      ]
    }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
