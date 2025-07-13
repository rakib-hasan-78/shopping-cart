import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ErrorPage from './pages/ErrorPage/ErrorPage.jsx'
import Root from './pages/Root/Root.jsx'
import Home from './pages/Home/Home';
import Details from './Details/Details.jsx'
import Statistics from './pages/Statistics/Statistics.jsx'
import Dashboard from './pages/Dashboard/Dashboard.jsx'


const router = createBrowserRouter([
  {
    path:'/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        loader:()=>fetch('/data.json').then(res=>res.json()), 
        element: <Home />
      },
      {
        path: '/products/:product_id',
        loader: ()=>fetch('/data.json').then(res=>res.json()), 
        element: <Details />
      },
      {
        path: '/statistics',
        element: <Statistics />
      },
      {
        path:'/dashboard',
        element: <Dashboard />
      },
      
    ]
    
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
  </StrictMode>,
)
