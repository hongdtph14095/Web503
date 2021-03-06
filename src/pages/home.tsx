import React from 'react'
import { Link } from 'react-router-dom'
import { ProductType } from '../types/product'

type HomeProps = {
  products: ProductType[

  ]
}

const Home = (props: HomeProps) => {
  return (
    <>
      <div>
        <div className="banner_section banner_section_three">
          <div className="container-fluid">
            <div className="row ">
              <div className="col-lg-4 col-md-6">
                <div className="banner_area">
                  <div className="banner_thumb">
                    <a href="shop.html"><img src="src/img/bg/banner8.jpg" alt="#" /></a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="banner_area">
                  <div className="banner_thumb">
                    <a href="shop.html"><img src="src/img/bg/banner9.jpg" alt="#" /></a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="banner_area bottom">
                  <div className="banner_thumb">
                    <a href="shop.html"><img src="src/img/bg/banner10.jpg" alt="#" /></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*banner area end*/}
        {/*product section area start*/}
        <section className="product_section womens_product">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="section_title">
                  <h2>Sản phẩm của chúng tôi</h2>
                  <p>Các sản phẩm thiết kế hiện đại,mới nhất</p>
                </div>
              </div>
            </div>
            <div className="row shop_wrapper">
              {props.products?.map((product) => {
                return <>
                  <div className="col-lg-4 col-md-4 col-12 ">
                    <div className="single_product">
                      <div className="product_thumb">
                        <a className="primary_img" href=""> <Link to={`/detail/${product.id}/products`}><img src="src/img/product/product15.jpg" /></Link></a>
                        <a className="secondary_img" href=""><Link to={`/detail/${product.id}/products`}><img src="src/img/product/product16.jpg" /></Link></a>
                        <div className="quick_button">
                          <a href="" title="quick_view"><Link to={`/detail/${product.id}/products`}>Xem sp</Link></a>
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
                        <h3>
                          {product.name}
                        </h3>
                        <span className="current_price">{product.price}</span>
                      </div>
                      <div className="product_content list_content">
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
                </>
              })}

            </div>
          </div>
        </section>
        <section className="banner_section banner_section_three">
          <div className="container-fluid">
            <div className="row ">
              <div className="col-lg-6 col-md-6">
                <div className="banner_area">
                  <div className="banner_thumb">
                    <a href="shop.html"><img src="src/img/bg/banner11.jpg" alt="#" /></a>
                    <div className="banner_content">
                      <h1>Handbag <br /> Men’s Collection</h1>
                      <a href="shop.html">Discover Now</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="banner_area">
                  <div className="banner_thumb">
                    <a href="shop.html"><img src="src/img/bg/banner12.jpg" alt="#" /></a>
                    <div className="banner_content">
                      <h1>Sneaker <br /> Men’s Collection</h1>
                      <a href="shop.html">Discover Now</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
       


      </div>

    </>
  )
}
export default Home