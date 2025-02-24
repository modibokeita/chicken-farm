

import Layout from './components/Layout'
import About from './pages/About'
import Home from './pages/Home'
import Contact from './pages/Contact'
import ProductList from './pages/chickens/ProductList'
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom"



const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Layout />}>
    <Route index element={<Home />} />
    <Route path="products" element={<ProductList />} />
    <Route path="contact" element={<Contact />} />
    <Route path="about" element={<About />} />
  </Route>
))


function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
