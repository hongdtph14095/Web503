import { useEffect, useState } from 'react'
import logo from './logo.svg'
import axios from 'axios';
import './App.css'
// import {list, remove} from './api/product';
import ShowInfo from './cotrollers/ShowInfo';
import type { ProductType } from './types/product'
import { Navigate, NavLink, Route, Routes } from 'react-router-dom';
import Home from './pages/Product'
import Product from './pages/Product';
import Dashboard from './pages/dashboard';
import ManagerProduct from './pages/ManagerProduct';
import WebsiteLayout from './pages/layouts/WebsiteLayout';
import AdminLayout from './pages/layouts/AdminLayout';


function App() {
  const [info, setInfo] = useState<ProductType>({
    name: "Dún",
    age: 21
  });
  const [products, setProducts] = useState<ProductType[]>([]);
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    const getProducts = async () => {
      const { data } = await axios.get('  http://localhost:3000/products');
      setProducts(data);
    }
    getProducts();
  }, [])
  // const removeItem = async(id:number) =>{
  //   const {data} = await remove(id);
  //   data && setProducts(products.filter(item => item._id !== data._id));
  // }
  return (
    <div className='App'>
      {/* <table>
        <thead>
          <th>#</th>
          <th>Name</th>
          <th></th>
        </thead>

      </table> */}
      {count} <button onClick={() => setCount(count + 1)}>Click</button>
      <ShowInfo info={info} />
      <hr />
      {products.map(item => <div>{item.name}</div>)}
      <header>
        <ul>
          <li><NavLink to="/">Home Page</NavLink></li>
          <li><NavLink to="/product">Product</NavLink></li>
          <li><NavLink to="/admin/dashboard">Admin Dashboard</NavLink></li>
        </ul>
      </header>
      <main>
        <Routes>
          {/* <Route path='/' element={<h1>Home Page</h1>} />
          < Route path='product' element={<h1>Product Page</h1>} /> */}
          <Route path="/" element={<WebsiteLayout />}>
            <Route index element={<Navigate to="dashboard" />} />
            <Route path='product' element={<Product />} />
            </Route >
          <Route path='admin' element={< AdminLayout />} >
              <Route index element={< Navigate to="dashboard" />} />
              <Route path='dashboard' element={<Dashboard />} />
              <Route path='product' element={<ManagerProduct />} />
              </Route >
      </Routes>

    </main>

    </div >
  )
}

export default App
