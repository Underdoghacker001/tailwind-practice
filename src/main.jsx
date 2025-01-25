import { lazy, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// import Home from './components/Home.jsx'
// import About from './components/About.jsx'
// import Contact from './components/Contact.jsx'

const Home = lazy(() => wait(1000).then(() => import('./components/Home.jsx')))
const About = lazy(() => wait(1000).then(() => import('./components/About.jsx')))
const Contact = lazy(() => wait(1000).then(() => import('./components/Contact.jsx')))



const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    errorElement: <Error/>,
    children: [
      {
        path: '/',
        element: <Home/>
      },
      {
        path: '/about',
        element: <About/>
      },
      {
        path: '/contact',
        element: <Contact/>
      },
    ]
  }
])
const wait = (time) => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve()
    }, time)
  })
}

createRoot(document.getElementById('root')).render(<RouterProvider router={router}/>)
