import React from 'react'

type Props = {}

const Home = (props: Props) => {
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
        <footer className="footer_widgets">
          <div className="footer_top">
            <div className="container">
              <div className="row">
                <div className="col-lg-2 col-md-6 col-sm-6 col-6">
                  <div className="widgets_container">
                    <h3>Information</h3>
                    <div className="footer_menu">
                      <ul>
                        <li><a href="about.html">About Us</a></li>
                        <li><a href="#">Delivery Information</a></li>
                        <li><a href="privacy-policy.html">Privacy Policy</a></li>
                        <li><a href="#">Terms &amp; Conditions</a></li>
                        <li><a href="contact.html">Contact Us</a></li>
                        <li><a href="#">Returns</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-lg-2 col-md-6 col-sm-6 col-6">
                  <div className="widgets_container">
                    <h3>Extras</h3>
                    <div className="footer_menu">
                      <ul>
                        <li><a href="#">Brands</a></li>
                        <li><a href="#">Gift Certificates</a></li>
                        <li><a href="#">Affiliate</a></li>
                        <li><a href="#">Specials</a></li>
                        <li><a href="contact.html">Site Map</a></li>
                        <li><a href="my-account.html">My Account</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="widgets_container contact_us">
                    <h3>Contact Us</h3>
                    <div className="footer_contact">
                      <p>Address: 6688 Princess Road, London, Greater London BAS 23JK, UK</p>
                      <p>Phone: <a href="tel:+(+012)800456789-987">(+012) 800 456 789 - 987</a> </p>
                      <p>Email: demo@example.com</p>
                      <ul>
                        <li><a href="#" title="Twitter"><i className="fa fa-twitter" /></a></li>
                        <li><a href="#" title="google-plus"><i className="fa fa-google-plus" /></a></li>
                        <li><a href="#" title="facebook"><i className="fa fa-facebook" /></a></li>
                        <li><a href="#" title="youtube"><i className="fa fa-youtube" /></a></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="widgets_container newsletter">
                    <h3>Join Our Newsletter Now</h3>
                    <div className="newleter-content">
                      <p>Exceptional quality. Ethical factories. Sign up to enjoy free U.S. shipping and returns on your first order.</p>
                      <div className="subscribe_form">
                        <form id="mc-form" className="mc-form footer-newsletter">
                          <input id="mc-email" type="email" autoComplete="off" placeholder="Enter you email address here..." />
                          <button id="mc-submit">Subscribe !</button>
                        </form>
                        {/* mailchimp-alerts Start */}
                        <div className="mailchimp-alerts text-centre">
                          <div className="mailchimp-submitting" />{/* mailchimp-submitting end */}
                          <div className="mailchimp-success" />{/* mailchimp-success end */}
                          <div className="mailchimp-error" />{/* mailchimp-error end */}
                        </div>{/* mailchimp-alerts end */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>


      </div>

    </>
  )
}
export default Home