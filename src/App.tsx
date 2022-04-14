import { useEffect, useState } from 'react'
import axios from 'axios';
import logo from './logo.svg'
// import "antd/dist/antd.variable.min.css";

import ShowInfo from './components/ShowInfo'
import type { ProductType } from './types/product';
import { add, list, remove, update } from './api/product';
import { Navigate, NavLink, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Dashboard from './pages/dashboard';
import ManagerProduct from './pages/ManagerProduct';
import WebsiteLayout from './pages/layouts/WebsiteLayout';
import AdminLayout from './pages/layouts/AdminLayout';

import "bootstrap/dist/css/bootstrap.min.css"
import ProductAdd from './pages/productAdd';
import ProductEdit from './pages/ProductEdit';
// import { ConfigProvider } from 'antd';
import Test from './components/Test';
import PrivateRouter from './components/PrivateRouter';
import Signup from './pages/Signup';
import Signin from './pages/Signin';
import ProductDetail from './pages/productDetail';
import Product from './pages/Product';
import about from './pages/about';
// ConfigProvider.config({
//   theme: {
//     primaryColor: '#25b864',
//   },
// });

function App() {
  const [products, setProducts] = useState<ProductType[]>([]); // 1
  // const [count, setCount] = useState<number>(0);

  useEffect(() => { // 3
    const getProducts = async () => {
      const { data } = await list();
      setProducts(data);
    }
    getProducts();
  }, [])

  const onHandleRemove = async (id: number) => {
    // xoa tren API
    await remove(id);
    // reRender
    setProducts(products.filter(item => item._id !== id));
  }

  const onHandleAdd = async (product: ProductType) => {
    // call api
    const { data } = await add(product);
    console.log(data);
    
    setProducts([...products, data])
  }
  const onHandleUpdate = async (product: ProductType) => {
    console.log(product);
    const { data } = await update(product)
    setProducts(products.map(item => item._id == data.id ? data : item));
  }
  return (
    <>
      <Routes>
        <Route path="/" element={<WebsiteLayout />}>
          <Route path="detail">
          <Route path=":id/products" element={<ProductDetail products={products} />} />
          </Route>
          <Route index element={<Home products={products} />} />
          <Route path="product" element={<Product products={products} />} />
          <Route path="about" element={<about />} />
          <Route path="signup" element={<Signup />} />
          <Route path="signin" element={<Signin />} />
        </Route>
        <Route path="admin" element={<AdminLayout />}>
          <Route index element={<Navigate to="dashboard" />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="product">
            <Route index element={<ManagerProduct data={products} onRemove={onHandleRemove} />} />
            <Route path="add" element={<ProductAdd onAdd={onHandleAdd} />} />
            <Route path=":id/edit" element={<ProductEdit onUpdate={onHandleUpdate} />} />
          </Route>
        </Route>

      </Routes>
    </>
  )
}

export default App