

import Layout from './components/Layout'
import About from './pages/About'
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom"



const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Layout />}>
    <Route path="/about" element={<About />} />
  </Route>
))


function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
