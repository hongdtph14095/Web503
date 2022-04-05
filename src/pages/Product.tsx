import React from "react";
import {ProductType} from '../types/productDetail'
type ProductProps = {
    products: ProductType[]
}
const Product = (props: ProductProps) => {
    return (
        <>
            <div className="shop_area shop_reverse">
                <div className="container">
                    <div className="shop_inner_area">
                        <div className="row">
                            <div className="col-lg-3 col-md-12">
                                {/*sidebar widget start*/}
                                <div className="sidebar_widget">
                                    <div className="widget_list widget_filter">
                                        <h2>Filter by price</h2>
                                        <form action="#">
                                            <div id="slider-range" />
                                            <button type="submit">Filter</button>
                                            <input type="text" name="text" id="amount" />
                                        </form>
                                    </div>
                                    <div className="widget_list widget_categories">
                                        <h2>Product categories</h2>
                                        <ul>
                                            <li><a href="#">Categories1 <span>6</span></a> </li>
                                            <li><a href="#"> Categories2 <span>10</span></a> </li>
                                            <li><a href="#">Categories3 <span>4</span></a> </li>
                                            <li><a href="#"> Categories4 <span>4</span></a> </li>
                                            <li><a href="#">Categories5 <span>3</span></a> </li>
                                        </ul>
                                    </div>
                                    <div className="widget_list widget_categories">
                                        <h2>Manufacturer</h2>
                                        <ul>
                                            <li><a href="#">Calvin Klein <span>6</span></a> </li>
                                            <li><a href="#"> Chanel <span>10</span></a> </li>
                                            <li><a href="#">Christian Dior <span>4</span></a> </li>
                                            <li><a href="#"> ferragamo <span>4</span></a> </li>
                                            <li><a href="#">hermes <span>10</span></a> </li>
                                            <li><a href="#">louis vuitton <span>8</span></a> </li>
                                            <li><a href="#">Tommy Hilfiger <span>7</span></a> </li>
                                            <li><a href="#">Versace <span>6</span></a> </li>
                                        </ul>
                                    </div>
                                    <div className="widget_list widget_categories">
                                        <h2>Select By Color</h2>
                                        <ul>
                                            <li><a href="#">Black <span>6</span></a> </li>
                                            <li><a href="#"> Blue <span>10</span></a> </li>
                                            <li><a href="#">Brown <span>4</span></a> </li>
                                            <li><a href="#"> Green <span>4</span></a> </li>
                                            <li><a href="#">Pink <span>7</span></a> </li>
                                            <li><a href="#">White<span>8</span></a> </li>
                                            <li><a href="#">Yellow <span>5</span></a> </li>
                                        </ul>
                                    </div>
                                    <div className="widget_list tag-cloud">
                                        <h2>Popular Tags</h2>
                                        <div className="tag_widget">
                                            <ul>
                                                <li><a href="#">Creams</a></li>
                                                <li><a href="#">Eyebrow Pencil</a></li>
                                                <li><a href="#">Eyeliner</a></li>
                                                <li><a href="#">Eye Shadow</a></li>
                                                <li><a href="#">Lotions</a></li>
                                                <li><a href="#">Mascara</a></li>
                                                <li><a href="#">Oils</a></li>
                                                <li><a href="#">Powders</a></li>
                                                <li><a href="#">Shampoos</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                {/*sidebar widget end*/}
                            </div>
                            <div className="col-lg-9 col-md-12">
                                {/*shop wrapper start*/}
                                {/*shop toolbar start*/}
                                <div className="shop_title">
                                    <h1>shop</h1>
                                </div>
                                <div className="shop_toolbar_wrapper">
                                    <div className="shop_toolbar_btn">
                                        <button data-role="grid_3" type="button" className="active btn-grid-3" data-toggle="tooltip" />
                                        <button data-role="grid_4" type="button" className=" btn-grid-4" data-toggle="tooltip" />
                                        <button data-role="grid_5" type="button" className="btn-grid-5" data-toggle="tooltip" />
                                        <button data-role="grid_list" type="button" className="btn-list" data-toggle="tooltip" title="List" />
                                    </div>
                                    <div className=" niceselect_option">
                                        <form className="select_option" action="#">
                                            <select name="orderby" id="short">
                                                <option selected value={1}>Sort by average rating</option>
                                                <option value={2}>Sort by popularity</option>
                                                <option value={3}>Sort by newness</option>
                                                <option value={4}>Sort by price: low to high</option>
                                                <option value={5}>Sort by price: high to low</option>
                                                <option value={6}>Product Name: Z</option>
                                            </select>
                                        </form>
                                    </div>
                                    <div className="page_amount">
                                        <p>Showing 1–9 of 21 results</p>
                                    </div>
                                </div>
                                {/*shop toolbar end*/}
                                <div className="row shop_wrapper">
                                    <div className="col-lg-4 col-md-4 col-12 ">
                                        <div className="single_product">
                                            <div className="product_thumb">
                                                <a className="primary_img" href="product-details.html"><img src="src/img/product/product15.jpg" /></a>
                                                <a className="secondary_img" href="product-details.html"><img src="src/img/product/product16.jpg" /></a>
                                                <div className="quick_button">
                                                    <a href="product-details.html" title="quick_view">Xem sản phẩm</a>
                                                </div>
                                                <div className="double_base">
                                                    <div className="product_sale">
                                                        <span>-7%</span>
                                                    </div>
                                                    <div className="label_product">
                                                        <span>new</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="product_content grid_content">
                                                <h3><a href="product-details.html">Marshall Portable  Bluetooth</a></h3>
                                                <span className="current_price">£60.00</span>
                                                <span className="old_price">£86.00</span>
                                            </div>
                                            <div className="product_content list_content">
                                                <h3><a href="product-details.html">Marshall Portable  Bluetooth</a></h3>
                                                <div className="product_ratting">
                                                    <ul>
                                                        <li><a href="#"><i className="fa fa-star" /></a></li>
                                                        <li><a href="#"><i className="fa fa-star" /></a></li>
                                                        <li><a href="#"><i className="fa fa-star" /></a></li>
                                                        <li><a href="#"><i className="fa fa-star" /></a></li>
                                                        <li><a href="#"><i className="fa fa-star" /></a></li>
                                                    </ul>
                                                </div>
                                                <div className="product_price">
                                                    <span className="current_price">£60.00</span>
                                                    <span className="old_price">£86.00</span>
                                                </div>
                                                <div className="product_desc">
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis ad, iure incidunt. Ab consequatur temporibus non eveniet inventore doloremque necessitatibus sed, ducimus quisquam, ad asperiores eligendi quia fugiat minus doloribus distinctio assumenda pariatur, quidem laborum quae quasi suscipit. Cupiditate dolor blanditiis rerum aliquid temporibus, libero minus nihil, veniam suscipit? Autem repellendus illo, amet praesentium fugit, velit natus? Dolorum perferendis reiciendis in quam porro ratione eveniet, tempora saepe ducimus, alias?</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-12 ">
                                        <div className="single_product">
                                            <div className="product_thumb">
                                                <a className="primary_img" href="product-details.html"><img src="src/img/product/product22.jpg" /></a>
                                                <a className="secondary_img" href="product-details.html"><img src="src/img/product/product23.jpg" /></a>
                                                <div className="quick_button">
                                                    <a href="product-details.html" title="quick_view">Xem sản phẩm</a>
                                                </div>
                                                <div className="label_product">
                                                    <span>new</span>
                                                </div>
                                            </div>
                                            <div className="product_content grid_content">
                                                <h3><a href="product-details.html">Koss KPH7 Portable</a></h3>
                                                <span className="current_price">£60.00</span>
                                            </div>
                                            <div className="product_content list_content">
                                                <h3><a href="product-details.html">Koss KPH7 Portable</a></h3>
                                                <div className="product_ratting">
                                                    <ul>
                                                        <li><a href="#"><i className="fa fa-star" /></a></li>
                                                        <li><a href="#"><i className="fa fa-star" /></a></li>
                                                        <li><a href="#"><i className="fa fa-star" /></a></li>
                                                        <li><a href="#"><i className="fa fa-star" /></a></li>
                                                        <li><a href="#"><i className="fa fa-star" /></a></li>
                                                    </ul>
                                                </div>
                                                <div className="product_price">
                                                    <span className="current_price">£60.00</span>
                                                    <span className="old_price">£86.00</span>
                                                </div>
                                                <div className="product_desc">
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis ad, iure incidunt. Ab consequatur temporibus non eveniet inventore doloremque necessitatibus sed, ducimus quisquam, ad asperiores eligendi quia fugiat minus doloribus distinctio assumenda pariatur, quidem laborum quae quasi suscipit. Cupiditate dolor blanditiis rerum aliquid temporibus, libero minus nihil, veniam suscipit? Autem repellendus illo, amet praesentium fugit, velit natus? Dolorum perferendis reiciendis in quam porro ratione eveniet, tempora saepe ducimus, alias?</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-12 ">
                                        <div className="single_product">
                                            <div className="product_thumb">
                                                <a className="primary_img" href="product-details.html"><img src="src/img/product/product10.jpg" /></a>
                                                <a className="secondary_img" href="product-details.html"><img src="src/img/product/product11.jpg" /></a>
                                                <div className="quick_button">
                                                    <a href="product-details.html" title="quick_view">Xem sản phẩm</a>
                                                </div>
                                                <div className="double_base">
                                                    <div className="product_sale">
                                                        <span>-7%</span>
                                                    </div>
                                                    <div className="label_product">
                                                        <span>new</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="product_content grid_content">
                                                <h3><a href="product-details.html">Beats Solo2 Solo 2</a></h3>
                                                <span className="current_price">£60.00</span>
                                                <span className="old_price">£86.00</span>
                                            </div>
                                            <div className="product_content list_content">
                                                <h3><a href="product-details.html">Beats Solo2 Solo 2</a></h3>
                                                <div className="product_ratting">
                                                    <ul>
                                                        <li><a href="#"><i className="fa fa-star" /></a></li>
                                                        <li><a href="#"><i className="fa fa-star" /></a></li>
                                                        <li><a href="#"><i className="fa fa-star" /></a></li>
                                                        <li><a href="#"><i className="fa fa-star" /></a></li>
                                                        <li><a href="#"><i className="fa fa-star" /></a></li>
                                                    </ul>
                                                </div>
                                                <div className="product_price">
                                                    <span className="current_price">£60.00</span>
                                                    <span className="old_price">£86.00</span>
                                                </div>
                                                <div className="product_desc">
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis ad, iure incidunt. Ab consequatur temporibus non eveniet inventore doloremque necessitatibus sed, ducimus quisquam, ad asperiores eligendi quia fugiat minus doloribus distinctio assumenda pariatur, quidem laborum quae quasi suscipit. Cupiditate dolor blanditiis rerum aliquid temporibus, libero minus nihil, veniam suscipit? Autem repellendus illo, amet praesentium fugit, velit natus? Dolorum perferendis reiciendis in quam porro ratione eveniet, tempora saepe ducimus, alias?</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-12 ">
                                        <div className="single_product">
                                            <div className="product_thumb">
                                                <a className="primary_img" href="product-details.html"><img src="src/img/product/product17.jpg" /></a>
                                                <a className="secondary_img" href="product-details.html"><img src="src/img/product/product18.jpg" /></a>
                                                <div className="quick_button">
                                                    <a href="product-details.html" title="quick_view">Xem sản phẩm</a>
                                                </div>
                                                <div className="label_product">
                                                    <span>new</span>
                                                </div>
                                            </div>
                                            <div className="product_content grid_content">
                                                <h3><a href="product-details.html">Beats EP Wired</a></h3>
                                                <span className="current_price">£60.00</span>
                                                <span className="old_price">£86.00</span>
                                            </div>
                                            <div className="product_content list_content">
                                                <h3><a href="product-details.html">Beats EP Wired</a></h3>
                                                <div className="product_ratting">
                                                    <ul>
                                                        <li><a href="#"><i className="fa fa-star" /></a></li>
                                                        <li><a href="#"><i className="fa fa-star" /></a></li>
                                                        <li><a href="#"><i className="fa fa-star" /></a></li>
                                                        <li><a href="#"><i className="fa fa-star" /></a></li>
                                                        <li><a href="#"><i className="fa fa-star" /></a></li>
                                                    </ul>
                                                </div>
                                                <div className="product_price">
                                                    <span className="current_price">£60.00</span>
                                                </div>
                                                <div className="product_desc">
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis ad, iure incidunt. Ab consequatur temporibus non eveniet inventore doloremque necessitatibus sed, ducimus quisquam, ad asperiores eligendi quia fugiat minus doloribus distinctio assumenda pariatur, quidem laborum quae quasi suscipit. Cupiditate dolor blanditiis rerum aliquid temporibus, libero minus nihil, veniam suscipit? Autem repellendus illo, amet praesentium fugit, velit natus? Dolorum perferendis reiciendis in quam porro ratione eveniet, tempora saepe ducimus, alias?</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-12 ">
                                        <div className="single_product">
                                            <div className="product_thumb">
                                                <a className="primary_img" href="product-details.html"><img src="src/img/product/product19.jpg" /></a>
                                                <a className="secondary_img" href="product-details.html"><img src="src/img/product/product20.jpg" /></a>
                                                <div className="quick_button">
                                                    <a href="product-details.html" title="quick_view">Xem sản phẩm</a>
                                                </div>
                                                <div className="product_sale">
                                                    <span>-7%</span>
                                                </div>
                                            </div>
                                            <div className="product_content grid_content">
                                                <h3><a href="product-details.html">Bose SoundLink Bluetooth</a></h3>
                                                <span className="current_price">£60.00</span>
                                                <span className="old_price">£86.00</span>
                                            </div>
                                            <div className="product_content list_content">
                                                <h3><a href="product-details.html">Bose SoundLink Bluetooth</a></h3>
                                                <div className="product_ratting">
                                                    <ul>
                                                        <li><a href="#"><i className="fa fa-star" /></a></li>
                                                        <li><a href="#"><i className="fa fa-star" /></a></li>
                                                        <li><a href="#"><i className="fa fa-star" /></a></li>
                                                        <li><a href="#"><i className="fa fa-star" /></a></li>
                                                        <li><a href="#"><i className="fa fa-star" /></a></li>
                                                    </ul>
                                                </div>
                                                <div className="product_price">
                                                    <span className="current_price">£60.00</span>
                                                    <span className="old_price">£86.00</span>
                                                </div>
                                                <div className="product_desc">
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis ad, iure incidunt. Ab consequatur temporibus non eveniet inventore doloremque necessitatibus sed, ducimus quisquam, ad asperiores eligendi quia fugiat minus doloribus distinctio assumenda pariatur, quidem laborum quae quasi suscipit. Cupiditate dolor blanditiis rerum aliquid temporibus, libero minus nihil, veniam suscipit? Autem repellendus illo, amet praesentium fugit, velit natus? Dolorum perferendis reiciendis in quam porro ratione eveniet, tempora saepe ducimus, alias?</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-12 ">
                                        <div className="single_product">
                                            <div className="product_thumb">
                                                <a className="primary_img" href="product-details.html"><img src="src/img/product/product21.jpg" /></a>
                                                <a className="secondary_img" href="product-details.html"><img src="src/img/product/product22.jpg" /></a>
                                                <div className="quick_button">
                                                    <a href="product-details.html" title="quick_view">Xem sản phẩm</a>
                                                </div>
                                                <div className="double_base">
                                                    <div className="product_sale">
                                                        <span>-7%</span>
                                                    </div>
                                                    <div className="label_product">
                                                        <span>new</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="product_content grid_content">
                                                <h3><a href="product-details.html">Apple iPhone SE 16GB</a></h3>
                                                <span className="current_price">£60.00</span>
                                                <span className="old_price">£86.00</span>
                                            </div>
                                            <div className="product_content list_content">
                                                <h3><a href="product-details.html">Apple iPhone SE 16GB</a></h3>
                                                <div className="product_ratting">
                                                    <ul>
                                                        <li><a href="#"><i className="fa fa-star" /></a></li>
                                                        <li><a href="#"><i className="fa fa-star" /></a></li>
                                                        <li><a href="#"><i className="fa fa-star" /></a></li>
                                                        <li><a href="#"><i className="fa fa-star" /></a></li>
                                                        <li><a href="#"><i className="fa fa-star" /></a></li>
                                                    </ul>
                                                </div>
                                                <div className="product_price">
                                                    <span className="current_price">£60.00</span>
                                                </div>
                                                <div className="product_desc">
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis ad, iure incidunt. Ab consequatur temporibus non eveniet inventore doloremque necessitatibus sed, ducimus quisquam, ad asperiores eligendi quia fugiat minus doloribus distinctio assumenda pariatur, quidem laborum quae quasi suscipit. Cupiditate dolor blanditiis rerum aliquid temporibus, libero minus nihil, veniam suscipit? Autem repellendus illo, amet praesentium fugit, velit natus? Dolorum perferendis reiciendis in quam porro ratione eveniet, tempora saepe ducimus, alias?</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-12 ">
                                        <div className="single_product">
                                            <div className="product_thumb">
                                                <a className="primary_img" href="product-details.html"><img src="src/img/product/product23.jpg" /></a>
                                                <a className="secondary_img" href="product-details.html"><img src="src/img/product/product24.jpg" /></a>
                                                <div className="quick_button">
                                                    <a href="product-details.html" title="quick_view">Xem sản phẩm</a>
                                                </div>
                                                <div className="product_sale">
                                                    <span>-7%</span>
                                                </div>
                                            </div>
                                            <div className="product_content grid_content">
                                                <h3><a href="product-details.html">Beats Solo Wireless</a></h3>
                                                <span className="current_price">£60.00</span>
                                                <span className="old_price">£86.00</span>
                                            </div>
                                            <div className="product_content list_content">
                                                <h3><a href="product-details.html">Beats Solo Wireless</a></h3>
                                                <div className="product_ratting">
                                                    <ul>
                                                        <li><a href="#"><i className="fa fa-star" /></a></li>
                                                        <li><a href="#"><i className="fa fa-star" /></a></li>
                                                        <li><a href="#"><i className="fa fa-star" /></a></li>
                                                        <li><a href="#"><i className="fa fa-star" /></a></li>
                                                        <li><a href="#"><i className="fa fa-star" /></a></li>
                                                    </ul>
                                                </div>
                                                <div className="product_price">
                                                    <span className="current_price">£60.00</span>
                                                    <span className="old_price">£86.00</span>
                                                </div>
                                                <div className="product_desc">
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis ad, iure incidunt. Ab consequatur temporibus non eveniet inventore doloremque necessitatibus sed, ducimus quisquam, ad asperiores eligendi quia fugiat minus doloribus distinctio assumenda pariatur, quidem laborum quae quasi suscipit. Cupiditate dolor blanditiis rerum aliquid temporibus, libero minus nihil, veniam suscipit? Autem repellendus illo, amet praesentium fugit, velit natus? Dolorum perferendis reiciendis in quam porro ratione eveniet, tempora saepe ducimus, alias?</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-12 ">
                                        <div className="single_product">
                                            <div className="product_thumb">
                                                <a className="primary_img" href="product-details.html"><img src="src/img/product/product25.jpg" /></a>
                                                <a className="secondary_img" href="product-details.html"><img src="src/img/product/product26.jpg" /></a>
                                                <div className="quick_button">
                                                    <a href="product-details.html" title="quick_view">Xem sản phẩm</a>
                                                </div>
                                                <div className="label_product">
                                                    <span>new</span>
                                                </div>
                                            </div>
                                            <div className="product_content grid_content">
                                                <h3><a href="product-details.html">Apple iPad with Retina</a></h3>
                                                <span className="current_price">£60.00</span>
                                            </div>
                                            <div className="product_content list_content">
                                                <h3><a href="product-details.html">Apple iPad with Retina</a></h3>
                                                <div className="product_ratting">
                                                    <ul>
                                                        <li><a href="#"><i className="fa fa-star" /></a></li>
                                                        <li><a href="#"><i className="fa fa-star" /></a></li>
                                                        <li><a href="#"><i className="fa fa-star" /></a></li>
                                                        <li><a href="#"><i className="fa fa-star" /></a></li>
                                                        <li><a href="#"><i className="fa fa-star" /></a></li>
                                                    </ul>
                                                </div>
                                                <div className="product_price">
                                                    <span className="current_price">£60.00</span>
                                                    <span className="old_price">£86.00</span>
                                                </div>
                                                <div className="product_desc">
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis ad, iure incidunt. Ab consequatur temporibus non eveniet inventore doloremque necessitatibus sed, ducimus quisquam, ad asperiores eligendi quia fugiat minus doloribus distinctio assumenda pariatur, quidem laborum quae quasi suscipit. Cupiditate dolor blanditiis rerum aliquid temporibus, libero minus nihil, veniam suscipit? Autem repellendus illo, amet praesentium fugit, velit natus? Dolorum perferendis reiciendis in quam porro ratione eveniet, tempora saepe ducimus, alias?</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-12 ">
                                        <div className="single_product">
                                            <div className="product_thumb">
                                                <a className="primary_img" href="product-details.html"><img src="src/img/product/product27.jpg" /></a>
                                                <a className="secondary_img" href="product-details.html"><img src="src/img/product/product28.jpg" /></a>
                                                <div className="quick_button">
                                                    <a href="product-details.html" title="quick_view">Xem sản phẩm</a>
                                                </div>
                                                <div className="product_sale">
                                                    <span>-7%</span>
                                                </div>
                                            </div>
                                            <div className="product_content grid_content">
                                                <h3><a href="product-details.html">Marshall Portable  Bluetooth</a></h3>
                                                <span className="current_price">£60.00</span>
                                                <span className="old_price">£86.00</span>
                                            </div>
                                            <div className="product_content list_content">
                                                <h3><a href="product-details.html">Marshall Portable  Bluetooth</a></h3>
                                                <div className="product_ratting">
                                                    <ul>
                                                        <li><a href="#"><i className="fa fa-star" /></a></li>
                                                        <li><a href="#"><i className="fa fa-star" /></a></li>
                                                        <li><a href="#"><i className="fa fa-star" /></a></li>
                                                        <li><a href="#"><i className="fa fa-star" /></a></li>
                                                        <li><a href="#"><i className="fa fa-star" /></a></li>
                                                    </ul>
                                                </div>
                                                <div className="product_price">
                                                    <span className="current_price">£60.00</span>
                                                    <span className="old_price">£86.00</span>
                                                </div>
                                                <div className="product_desc">
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis ad, iure incidunt. Ab consequatur temporibus non eveniet inventore doloremque necessitatibus sed, ducimus quisquam, ad asperiores eligendi quia fugiat minus doloribus distinctio assumenda pariatur, quidem laborum quae quasi suscipit. Cupiditate dolor blanditiis rerum aliquid temporibus, libero minus nihil, veniam suscipit? Autem repellendus illo, amet praesentium fugit, velit natus? Dolorum perferendis reiciendis in quam porro ratione eveniet, tempora saepe ducimus, alias?</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-12 ">
                                        <div className="single_product">
                                            <div className="product_thumb">
                                                <a className="primary_img" href="product-details.html"><img src="src/img/product/product2.jpg" /></a>
                                                <a className="secondary_img" href="product-details.html"><img src="src/img/product/product1.jpg" /></a>
                                                <div className="quick_button">
                                                    <a href="product-details.html" title="quick_view">Xem sản phẩm</a>
                                                </div>
                                                <div className="label_product">
                                                    <span>new</span>
                                                </div>
                                            </div>
                                            <div className="product_content grid_content">
                                                <h3><a href="product-details.html">JBL Flip 3 Portable</a></h3>
                                                <span className="current_price">£60.00</span>
                                            </div>
                                            <div className="product_content list_content">
                                                <h3><a href="product-details.html">JBL Flip 3 Portable</a></h3>
                                                <div className="product_ratting">
                                                    <ul>
                                                        <li><a href="#"><i className="fa fa-star" /></a></li>
                                                        <li><a href="#"><i className="fa fa-star" /></a></li>
                                                        <li><a href="#"><i className="fa fa-star" /></a></li>
                                                        <li><a href="#"><i className="fa fa-star" /></a></li>
                                                        <li><a href="#"><i className="fa fa-star" /></a></li>
                                                    </ul>
                                                </div>
                                                <div className="product_price">
                                                    <span className="current_price">£60.00</span>
                                                    <span className="old_price">£86.00</span>
                                                </div>
                                                <div className="product_desc">
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis ad, iure incidunt. Ab consequatur temporibus non eveniet inventore doloremque necessitatibus sed, ducimus quisquam, ad asperiores eligendi quia fugiat minus doloribus distinctio assumenda pariatur, quidem laborum quae quasi suscipit. Cupiditate dolor blanditiis rerum aliquid temporibus, libero minus nihil, veniam suscipit? Autem repellendus illo, amet praesentium fugit, velit natus? Dolorum perferendis reiciendis in quam porro ratione eveniet, tempora saepe ducimus, alias?</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-12 ">
                                        <div className="single_product">
                                            <div className="product_thumb">
                                                <a className="primary_img" href="product-details.html"><img src="src/img/product/product3.jpg" /></a>
                                                <a className="secondary_img" href="product-details.html"><img src="src/img/product/product4.jpg" /></a>
                                                <div className="quick_button">
                                                    <a href="product-details.html" title="quick_view">Xem sản phẩm</a>
                                                </div>
                                                <div className="product_sale">
                                                    <span>-7%</span>
                                                </div>
                                            </div>
                                            <div className="product_content grid_content">
                                                <h3><a href="product-details.html">Marshall Portable  Bluetooth</a></h3>
                                                <span className="current_price">£60.00</span>
                                                <span className="old_price">£86.00</span>
                                            </div>
                                            <div className="product_content list_content">
                                                <h3><a href="product-details.html">Marshall Portable  Bluetooth</a></h3>
                                                <div className="product_ratting">
                                                    <ul>
                                                        <li><a href="#"><i className="fa fa-star" /></a></li>
                                                        <li><a href="#"><i className="fa fa-star" /></a></li>
                                                        <li><a href="#"><i className="fa fa-star" /></a></li>
                                                        <li><a href="#"><i className="fa fa-star" /></a></li>
                                                        <li><a href="#"><i className="fa fa-star" /></a></li>
                                                    </ul>
                                                </div>
                                                <div className="product_price">
                                                    <span className="current_price">£60.00</span>
                                                    <span className="old_price">£86.00</span>
                                                </div>
                                                <div className="product_desc">
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis ad, iure incidunt. Ab consequatur temporibus non eveniet inventore doloremque necessitatibus sed, ducimus quisquam, ad asperiores eligendi quia fugiat minus doloribus distinctio assumenda pariatur, quidem laborum quae quasi suscipit. Cupiditate dolor blanditiis rerum aliquid temporibus, libero minus nihil, veniam suscipit? Autem repellendus illo, amet praesentium fugit, velit natus? Dolorum perferendis reiciendis in quam porro ratione eveniet, tempora saepe ducimus, alias?</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-12 ">
                                        <div className="single_product">
                                            <div className="product_thumb">
                                                <a className="primary_img" href="product-details.html"><img src="src/img/product/product5.jpg" /></a>
                                                <a className="secondary_img" href="product-details.html"><img src="src/img/product/product6.jpg" /></a>
                                                <div className="quick_button">
                                                    <a href="product-details.html" title="quick_view">Xem sản phẩm</a>
                                                </div>
                                                <div className="double_base">
                                                    <div className="product_sale">
                                                        <span>-7%</span>
                                                    </div>
                                                    <div className="label_product">
                                                        <span>new</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="product_content grid_content">
                                                <h3><a href="product-details.html">Marshall Portable  Bluetooth</a></h3>
                                                <span className="current_price">£60.00</span>
                                            </div>
                                            <div className="product_content list_content">
                                                <h3><a href="product-details.html">Marshall Portable  Bluetooth</a></h3>
                                                <div className="product_ratting">
                                                    <ul>
                                                        <li><a href="#"><i className="fa fa-star" /></a></li>
                                                        <li><a href="#"><i className="fa fa-star" /></a></li>
                                                        <li><a href="#"><i className="fa fa-star" /></a></li>
                                                        <li><a href="#"><i className="fa fa-star" /></a></li>
                                                        <li><a href="#"><i className="fa fa-star" /></a></li>
                                                    </ul>
                                                </div>
                                                <div className="product_price">
                                                    <span className="current_price">£60.00</span>
                                                    <span className="old_price">£86.00</span>
                                                </div>
                                                <div className="product_desc">
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis ad, iure incidunt. Ab consequatur temporibus non eveniet inventore doloremque necessitatibus sed, ducimus quisquam, ad asperiores eligendi quia fugiat minus doloribus distinctio assumenda pariatur, quidem laborum quae quasi suscipit. Cupiditate dolor blanditiis rerum aliquid temporibus, libero minus nihil, veniam suscipit? Autem repellendus illo, amet praesentium fugit, velit natus? Dolorum perferendis reiciendis in quam porro ratione eveniet, tempora saepe ducimus, alias?</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-12 ">
                                        <div className="single_product">
                                            <div className="product_thumb">
                                                <a className="primary_img" href="product-details.html"><img src="src/img/product/product7.jpg" /></a>
                                                <a className="secondary_img" href="product-details.html"><img src="src/img/product/product8.jpg" /></a>
                                                <div className="quick_button">
                                                    <a href="product-details.html" title="quick_view">Xem sản phẩm</a>
                                                </div>
                                                <div className="product_sale">
                                                    <span>-7%</span>
                                                </div>
                                            </div>
                                            <div className="product_content grid_content">
                                                <h3><a href="product-details.html">Marshall Portable  Bluetooth</a></h3>
                                                <span className="current_price">£60.00</span>
                                                <span className="old_price">£86.00</span>
                                            </div>
                                            <div className="product_content list_content">
                                                <h3><a href="product-details.html">Marshall Portable  Bluetooth</a></h3>
                                                <div className="product_ratting">
                                                    <ul>
                                                        <li><a href="#"><i className="fa fa-star" /></a></li>
                                                        <li><a href="#"><i className="fa fa-star" /></a></li>
                                                        <li><a href="#"><i className="fa fa-star" /></a></li>
                                                        <li><a href="#"><i className="fa fa-star" /></a></li>
                                                        <li><a href="#"><i className="fa fa-star" /></a></li>
                                                    </ul>
                                                </div>
                                                <div className="product_price">
                                                    <span className="current_price">£60.00</span>
                                                    <span className="old_price">£86.00</span>
                                                </div>
                                                <div className="product_desc">
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis ad, iure incidunt. Ab consequatur temporibus non eveniet inventore doloremque necessitatibus sed, ducimus quisquam, ad asperiores eligendi quia fugiat minus doloribus distinctio assumenda pariatur, quidem laborum quae quasi suscipit. Cupiditate dolor blanditiis rerum aliquid temporibus, libero minus nihil, veniam suscipit? Autem repellendus illo, amet praesentium fugit, velit natus? Dolorum perferendis reiciendis in quam porro ratione eveniet, tempora saepe ducimus, alias?</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-12 ">
                                        <div className="single_product">
                                            <div className="product_thumb">
                                                <a className="primary_img" href="product-details.html"><img src="src/img/product/product9.jpg" /></a>
                                                <a className="secondary_img" href="product-details.html"><img src="src/img/product/product10.jpg" /></a>
                                                <div className="quick_button">
                                                    <a href="product-details.html" title="quick_view">Xem sản phẩm</a>
                                                </div>
                                                <div className="product_sale">
                                                    <span>-7%</span>
                                                </div>
                                            </div>
                                            <div className="product_content grid_content">
                                                <h3><a href="product-details.html">Marshall Portable  Bluetooth</a></h3>
                                                <span className="current_price">£60.00</span>
                                                <span className="old_price">£86.00</span>
                                            </div>
                                            <div className="product_content list_content">
                                                <h3><a href="product-details.html">Marshall Portable  Bluetooth</a></h3>
                                                <div className="product_ratting">
                                                    <ul>
                                                        <li><a href="#"><i className="fa fa-star" /></a></li>
                                                        <li><a href="#"><i className="fa fa-star" /></a></li>
                                                        <li><a href="#"><i className="fa fa-star" /></a></li>
                                                        <li><a href="#"><i className="fa fa-star" /></a></li>
                                                        <li><a href="#"><i className="fa fa-star" /></a></li>
                                                    </ul>
                                                </div>
                                                <div className="product_price">
                                                    <span className="current_price">£60.00</span>
                                                    <span className="old_price">£86.00</span>
                                                </div>
                                                <div className="product_desc">
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis ad, iure incidunt. Ab consequatur temporibus non eveniet inventore doloremque necessitatibus sed, ducimus quisquam, ad asperiores eligendi quia fugiat minus doloribus distinctio assumenda pariatur, quidem laborum quae quasi suscipit. Cupiditate dolor blanditiis rerum aliquid temporibus, libero minus nihil, veniam suscipit? Autem repellendus illo, amet praesentium fugit, velit natus? Dolorum perferendis reiciendis in quam porro ratione eveniet, tempora saepe ducimus, alias?</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-12 ">
                                        <div className="single_product">
                                            <div className="product_thumb">
                                                <a className="primary_img" href="product-details.html"><img src="src/img/product/product11.jpg" /></a>
                                                <a className="secondary_img" href="product-details.html"><img src="src/img/product/product12.jpg" /></a>
                                                <div className="quick_button">
                                                    <a href="product-details.html" title="quick_view">Xem sản phẩm</a>
                                                </div>
                                                <div className="label_product">
                                                    <span>new</span>
                                                </div>
                                            </div>
                                            <div className="product_content grid_content">
                                                <h3><a href="product-details.html">Marshall Portable  Bluetooth</a></h3>
                                                <span className="current_price">£60.00</span>
                                            </div>
                                            <div className="product_content list_content">
                                                <h3><a href="product-details.html">Marshall Portable  Bluetooth</a></h3>
                                                <div className="product_ratting">
                                                    <ul>
                                                        <li><a href="#"><i className="fa fa-star" /></a></li>
                                                        <li><a href="#"><i className="fa fa-star" /></a></li>
                                                        <li><a href="#"><i className="fa fa-star" /></a></li>
                                                        <li><a href="#"><i className="fa fa-star" /></a></li>
                                                        <li><a href="#"><i className="fa fa-star" /></a></li>
                                                    </ul>
                                                </div>
                                                <div className="product_price">
                                                    <span className="current_price">£60.00</span>
                                                    <span className="old_price">£86.00</span>
                                                </div>
                                                <div className="product_desc">
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis ad, iure incidunt. Ab consequatur temporibus non eveniet inventore doloremque necessitatibus sed, ducimus quisquam, ad asperiores eligendi quia fugiat minus doloribus distinctio assumenda pariatur, quidem laborum quae quasi suscipit. Cupiditate dolor blanditiis rerum aliquid temporibus, libero minus nihil, veniam suscipit? Autem repellendus illo, amet praesentium fugit, velit natus? Dolorum perferendis reiciendis in quam porro ratione eveniet, tempora saepe ducimus, alias?</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="shop_toolbar t_bottom">
                                    <div className="pagination">
                                        <ul>
                                            <li className="current">1</li>
                                            <li><a href="#">2</a></li>
                                            <li><a href="#">3</a></li>
                                            <li className="next"><a href="#">next</a></li>
                                            <li><a href="#">&gt;&gt;</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default Product