import { useEffect, useState } from 'react'
import axios from 'axios';
import logo from './logo.svg'
import "antd/dist/antd.variable.min.css";

import ShowInfo from './components/ShowInfo'
import type { ProductType } from './types/product';
import { add, list, remove, update } from './api/product';
import { Navigate, NavLink, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Product from './pages/Product';
import Dashboard from './pages/dashboard';
import ManagerProduct from './pages/ManagerProduct';
import WebsiteLayout from './pages/layouts/WebsiteLayout';
import AdminLayout from './pages/layouts/AdminLayout';

import "bootstrap/dist/css/bootstrap.min.css"
import ProductAdd from './pages/productAdd';
import ProductEdit from './pages/ProductEdit';
import { ConfigProvider } from 'antd';
import Test from './components/Test';
import PrivateRouter from './components/PrivateRouter';
import Signup from './pages/Signup';
import Signin from './pages/Signin';


ConfigProvider.config({
  theme: {
    primaryColor: '#25b864',
  },
});

function App() {
  const [products, setProducts] = useState<ProductType[]>([]); // 1
  // const [count, setCount] = useState<number>(0);
  
  useEffect(() => { // 3
     const getProducts = async () => {
        const { data } = await list();
        setProducts(data);
     }
     getProducts();
  },[])

  const onHandleRemove = async (id: number) => {
    // xoa tren API
    await remove(id);
    // reRender
    setProducts(products.filter(item => item.id !== id));
  }

  const onHandleAdd = async (product: ProductType) => {
    // call api
    const { data} = await add(product);
    setProducts([...products, data])
  }
  const onHandleUpdate = async (product:ProductType) => {
      console.log(product);
     const { data } = await update(product)
     setProducts(products.map(item => item.id == data.id ? data : item));
  }
  return ( 
    <>
    <Routes>
      <Route path="/" element={<WebsiteLayout />}>
          <Route index element={<Home />} />
          <Route path="product" element={<Product />} />
          <Route path="signup" element={<Signup />}/>
          <Route path="signin" element={<Signin />}/>
      </Route>
      <Route path="admin" element={<PrivateRouter><AdminLayout /></PrivateRouter>}> 
        <Route index element={<Navigate to="dashboard"/>} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="product">
          <Route index element={<ManagerProduct data={products} onRemove={onHandleRemove}/>} />
          <Route path="add" element={<ProductAdd onAdd={onHandleAdd}/>} />
          <Route path=":id/edit" element={<ProductEdit onUpdate={onHandleUpdate}/>} />
        </Route>
      </Route>
      
    </Routes>
    </>
  )
}

export default App