import React from 'react'
import { NavLink } from 'react-router-dom'

type Props = {}

const Menu = (props: Props) => {
  return (
    // <ul className="navbar-nav me-auto mb-2 mb-lg-0">
    //     <li className="nav-item">
    //       <NavLink className="nav-link" aria-current="page" to="/">Home  </NavLink>
    //     </li>
    //     <li className="nav-item">
    //       <NavLink className="nav-link" to="/product">Product</NavLink>
    //     </li>
    //     <li className="nav-item">
    //       <NavLink className="nav-link" to="/admin">Dashboard</NavLink>
    //     </li>
    //     <li className="nav-item">
    //       <NavLink className="nav-link" to="/admin/product">Manager Product</NavLink>
    //     </li>
    //   </ul>
    <div className="main_menu"> 
    <nav>  
      <ul>
        <li className="active"><a href="/">Home <i className="fa fa-angle-down" /></a>
          <ul className="sub_menu">
            <li><a href="index.html">Home </a></li>
          </ul>
        </li>
        <li className="mega_items"><a href="shop.html">shop <i className="fa fa-angle-down" /></a>
          <ul className="mega_menu">
            <li><a href="#">Shop Layouts</a>
              <ul>
                <li><a href="shop-list.html">List View</a></li>
              </ul>
            </li>
            <li><a href="#">other Pages</a>
              <ul>
                <li><a href="cart.html">cart</a></li>
              </ul>
            </li>
            <li><a href="#">Product Types</a>
              <ul>
                <li><a href="product-details.html">product details</a></li>
              </ul>
            </li>
            <li><a href="#">collection</a>
              <ul>
                <li><a href="shop.html">Handbag</a></li>
              </ul>
            </li>
            <li className="banner_menu"><a href="#"><img src="assets/img/bg/banner1.jpg"  /></a></li>
          </ul>
        </li>
        <li><a href="blog.html">blog <i className="fa fa-angle-down" /></a>
          <ul className="sub_menu pages">
            <li><a href="blog-details.html">blog details</a></li>
          </ul>
        </li>
        <li><a href="#">pages <i className="fa fa-angle-down" /></a>
          <ul className="sub_menu pages">
            <li><a href="about.html">About Us</a></li>
          </ul>
        </li>
      </ul> 
    </nav> 
  </div>
  )
}

export default Menu