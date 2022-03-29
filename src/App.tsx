import { useEffect, useState } from 'react'
import logo from './logo.svg'
import axios from 'axios';
import './App.css'
 import {add, list, remove, update} from './api/product';
// import ShowInfo from './cotrollers/ShowInfo';
import type { ProductType } from './types/product'
import { Navigate, NavLink, Route, Routes } from 'react-router-dom';
import Home from './pages/Product'
import Product from './pages/Product';
import Dashboard from './pages/dashboard';
import ManagerProduct from './pages/ManagerProduct';
import WebsiteLayout from './pages/layouts/WebsiteLayout';
import AdminLayout from './pages/layouts/AdminLayout';
import "bootstrap/dist/css/bootstrap.min.css"
import ShowInfo from './components/ShowInfo';

import ProductAdd from './pages/productAdd';
import ProductEdit from './pages/ProductEdit';
import Test from './components/test';
import PrivateRouter from './components/PrivateRouter';

function App() {
  const [products, setProducts] = useState<ProductType[]>([]);
  
  //const [count, setCount] = useState<number>(0);

  useEffect(() => {
    const getProducts = async () => { 
      const { data } = await list();
      setProducts(data);
    }
    getProducts();
  }, [])
  const onHandleRemove = async(id:number) =>{
    // const {data} = await remove(id);
    // data && setProducts(products.filter(item => item._id !== data._id));
    await remove(id);

  }
  const onHandleAdd = async (product: ProductType) =>{
   const {data} = await add(product);
   setProducts([...products, data])
  }
  const onHandleUpdate  = async (product: ProductType) =>{
    const {data} = await update(product);
    setProducts(products.map(item => item.id === data.id ? data:item ));
  }
  return (
    
        <Routes>
          {/* <Route path='/' element={<h1>Home Page</h1>} />
          < Route path='product' element={<h1>Product Page</h1>} /> */}
          <Route path="/" element={<WebsiteLayout />}>
            <Route index element={<Home/>} />
            <Route path='product' element={<Product />} />
            <Route path='login' element={<h1>Login page</h1>} />
            </Route >
          <Route path='admin' element={ <PrivateRouter> < AdminLayout /></PrivateRouter>} >
              <Route index element={< Navigate to="dashboard" />} />
              <Route path='dashboard' element={<Dashboard />} />
              <Route path="product" >
              <Route index element={<ManagerProduct data={products} onRemove={onHandleRemove} />} />
              <Route path='add' element={<ProductAdd onAdd={onHandleAdd}/>}  />
              <Route path=':id/edit' element={<ProductEdit onUpdate={onHandleUpdate}/>}  />
              </Route>
              </Route >
      </Routes>

  
  )
}

export default App
