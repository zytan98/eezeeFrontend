import './App.css'
import { Route, Routes } from 'react-router-dom'
import Product from './components/pages/Product/Product'
import Home from './components/pages/Home/Home'

function App () {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/product/:id' element={<Product />} />
      </Routes>
    </>
  )
}

export default App
