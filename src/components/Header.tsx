import React from "react";
import { NavLink } from "react-router-dom";
import Menu from "./Menu";
import Search from "./Search";

const Header = () => {
  return (
    // <nav className="navbar navbar-expand-lg navbar-light bg-light">
    //   <div className="container-fluid">
    //     <NavLink className="navbar-brand" to="/">
    //       Logo
    //     </NavLink>
    //     <button
    //       className="navbar-toggler"
    //       type="button"
    //       data-bs-toggle="collapse"
    //       data-bs-target="#navbarSupportedContent"
    //       aria-controls="navbarSupportedContent"
    //       aria-expanded="false"
    //       aria-label="Toggle navigation"
    //     >
    //       <span className="navbar-toggler-icon" />
    //     </button>
    //     <div className="collapse navbar-collapse" id="navbarSupportedContent">
    //       <Menu />
    //       <Search />
    //     </div>
    //   </div>
    // </nav>
    <header className="header_area header_three">
  <div className="header_top">
    <div className="container-fluid">   
      <div className="row align-items-center">
        {/* <div className="col-lg-7 col-md-12">
          <div className="welcome_text">
            <ul>
              <li><span>Free Delivery:</span> Take advantage of our time to save event</li>
              <li><span>Free Returns *</span> Satisfaction guaranteed</li>
            </ul>
          </div>
        </div> */}
        <div className="col-lg-5 col-md-12">
          <div className="top_right text-right">
            <ul>
              <li className="top_links"><a href="#">My Account <i className="ion-chevron-down" /></a>
                <ul className="dropdown_links">
                  <li><a href="wishlist.html">My Wish List </a></li>
                  <li><a href="my-account.html">My Account </a></li>
                  <li><a href="#">Sign In</a></li>
                  <li><a href="compare.html">Compare Products</a></li>
                </ul>
              </li> 
            </ul>
          </div>   
        </div>
      </div>
    </div>
  </div>
  <div className="header_middel">
    <div className="container-fluid">
      <div className="middel_inner">
        <div className="row align-items-center">
          <div className="col-lg-4">
            <div className="search_bar">
              <form action="#">                          
                <input placeholder="Search entire store here..." type="text" />
                <button type="submit"><i className="ion-ios-search-strong" /></button>
              </form>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="logo">
              <a href="index.html"><img src="assets/img/logo/logo.png"  /></a>
            </div>
          </div>
          <div className="col-lg-4">
            {/* <div className="cart_area">
              <div className="cart_link">
                <a href="#"><i className="fa fa-shopping-basket" />2 item(s)</a>
                <div className="mini_cart">
                  <div className="cart_item top">
                    <div className="cart_img">
                      <a href="#"><img src="assets/img/s-product/product.jpg"  /></a>
                    </div>
                    <div className="cart_info">
                      <a href="#">Apple iPhone SE 16GB</a>
                      <span>1x $60.00</span>
                    </div>
                    <div className="cart_remove">
                      <a href="#"><i className="ion-android-close" /></a>
                    </div>
                  </div>
                  <div className="cart_item bottom">
                    <div className="cart_img">
                      <a href="#"><img src="assets/img/s-product/product2.jpg"  /></a>
                    </div>
                    <div className="cart_info">
                      <a href="#">Marshall Portable  Bluetooth</a>
                      <span> 1x $160.00</span>
                    </div>
                    <div className="cart_remove">
                      <a href="#"><i className="ion-android-close" /></a>
                    </div>
                  </div>
                  <div className="cart__table">
                    <table>
                      <tbody>
                        <tr>
                          <td className="text-left">Sub-Total :</td>
                          <td className="text-right">$150.00</td>
                        </tr>
                        <tr>
                          <td className="text-left">Total :</td>
                          <td className="text-right">$184.00</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="cart_button view_cart">
                    <a href="cart.html">View Cart</a>
                  </div>
                  <div className="cart_button checkout">
                    <a href="checkout.html">Checkout</a>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
      <div className="horizontal_menu">
        <div className="logo_container">
          <a href="index.html"><img src="assets/img/logo/logo.png"  /></a>
        </div>
        <div className="right_menu">
          <div className="main_menu"> 
            <nav>  
              <ul>
                <li><a href="#">Specials</a></li>
                <li><a href="#">Sneaker</a></li>
                <li><a href="about.html">About us</a></li>
                <li><a href="contact.html">Contact Us</a></li>
              </ul> 
            </nav> 
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="header_bottom sticky-header">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-12">
          <div className="main_menu_inner">
            <div className="main_menu"> 
              <nav>  
                <ul>
                  <li className="active"><a href="index.html">Home </a></li>
                  <li><a href="shop_category.html">shop </a></li>
                  <li><a href="about.html">About us</a></li>
                  <li><a href="#">pages <i className="fa fa-angle-down" /></a>
                    {/* <ul className="sub_menu pages">
                      <li><a href="about.html">About Us</a></li>
                      <li><a href="services.html">services</a></li>
                      <li><a href="faq.html">Frequently Questions</a></li>
                      <li><a href="login.html">login</a></li>
                      <li><a href="my-account.html">my account</a></li>
                      <li><a href="wishlist.html">Wishlist</a></li>
                      <li><a href="404.html">Error 404</a></li>
                      <li><a href="compare.html">compare</a></li>
                      <li><a href="privacy-policy.html">privacy policy</a></li>
                      <li><a href="coming-soon.html">coming soon</a></li>
                    </ul> */}
                  </li>
                  <li><a href="blog.html">blog</a></li>
                  <li><a href="contact.html">Contact Us</a></li>
                </ul>   
              </nav> 
            </div>
          </div> 
        </div>
      </div>
    </div>
  </div>
</header>

  );
};

export default Header;