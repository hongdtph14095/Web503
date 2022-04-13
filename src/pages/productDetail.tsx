import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { SubmitHandler, useForm } from 'react-hook-form';
import { ProductType } from '../types/productDetail'
import { read } from '../api/product';
import anh from '../img/product/product5.jpg'
import '../css/detail.css'
type ProductDetailProps = {
    products: ProductType[]
}

type Show = {
    name: string,
    price: number,
    desc: string,
}
const productDetail = (props: ProductDetailProps) => {
    const { id } = useParams();
    const { register, formState: { errors }, reset } = useForm<Show>();
    useEffect(() => {
        const getProduct = async () => {
            const { data } = await read(_id);
            reset(data);
        };
        getProduct();
    }, []);
    return (
        <>
            <div>
                <div className="breadcrumbs_area product_bread">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="breadcrumb_content">
                                    <ul>
                                        <li><a href="index.html">home</a></li>
                                        <li>/</li>
                                        <li>product details</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="product_details">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-5 col-md-5">
                                <div className="product-details-tab">
                                    <div id="img-1" className="zoomWrapper single-zoom">
                                        <a href="#">
                                        <img src={anh} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-7 col-md-7">
                                <div className="product_d_right">
                                    <form action="#">
                                        <h1><input type="text" placeholder="Enter Name." className="input" {...register('name')} /></h1>
                                        <div className=" product_ratting">
                                            <ul>
                                                <li><a href="#"><i className="fa fa-star" /></a></li>
                                                <li><a href="#"><i className="fa fa-star" /></a></li>
                                                <li><a href="#"><i className="fa fa-star" /></a></li>
                                                <li><a href="#"><i className="fa fa-star" /></a></li>
                                                <li><a href="#"><i className="fa fa-star" /></a></li>
                                                <li className="review"><a href="#"> 1 review </a></li>
                                                <li className="review"><a href="#"> Write a review </a></li>
                                            </ul>
                                        </div>
                                        <div className="product_price">
                                            <span className="current_price"><input type="text" placeholder="Enter Name." className="input" {...register('price')} /></span>
                                        </div>
                                        <div className="product_desc">
                                            <p>More room to move. With 80GB or 160GB of storage and up to 40 hours of battery life, the new iPod classic lets you enjoy up to 40,000 songs or up to 200 hours of video or any combination wherever you go. Cover Flow. Browse through your music collection by flipping through album art. Select an album to turn it over and see the track list. Enhanced interface. Experience a whole new way to browse and view your music and video. Sleeker design. Beautiful, durable, and sleeker than ever, iPod classic now features an anodized aluminum and polish.. </p>
                                        </div>
                                        <div className="product_variant color">
                                            <h3>color</h3>
                                            <select className="niceselect_option" id="color" name="produc_color">
                                                <option selected value={1}>choose in option</option>
                                                <option value={2}>choose in option2</option>
                                                <option value={3}>choose in option3</option>
                                                <option value={4}>choose in option4</option>
                                            </select>
                                        </div>
                                        <div className="product_variant size">
                                            <h3>size</h3>
                                            <select className="niceselect_option" id="color1" name="produc_color">
                                                <option selected value={1}>size</option>
                                                <option value={2}>x</option>
                                                <option value={2}>xl</option>
                                                <option value={3}>md</option>
                                                <option value={4}>xxl</option>
                                                <option value={4}>s</option>
                                            </select>
                                        </div>
                                        <div className="product_variant quantity">
                                            <label>quantity</label>
                                            <input min={1} max={100} defaultValue={1} type="number" />
                                            <button className="button" type="submit">add to cart</button>
                                        </div>
                                        <div className=" product_d_action">
                                            <ul>
                                                <li><a href="#" title="Add to wishlist"><i className="fa fa-heart-o" aria-hidden="true" /> Add to Wish List</a></li>
                                                <li><a href="#" title="Add to Compare"><i className="fa fa-sliders" aria-hidden="true" /> Compare this Product</a></li>
                                            </ul>
                                        </div>
                                    </form>
                                    <div className="priduct_social">
                                        <h3>Share on:</h3>
                                        <ul>
                                            <li><a href="#"><i className="fa fa-rss" /></a></li>
                                            <li><a href="#"><i className="fa fa-vimeo" /></a></li>
                                            <li><a href="#"><i className="fa fa-tumblr" /></a></li>
                                            <li><a href="#"><i className="fa fa-pinterest" /></a></li>
                                            <li><a href="#"><i className="fa fa-linkedin" /></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="product_d_info">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="product_d_inner">
                                    <div className="product_info_button">
                                        <ul className="nav" role="tablist">
                                            <li>
                                                <a className="active" data-toggle="tab" href="#info" role="tab" aria-controls="info" aria-selected="false">More info</a>
                                            </li>
                                            <li>
                                                <a data-toggle="tab" href="#sheet" role="tab" aria-controls="sheet" aria-selected="false">Data sheet</a>
                                            </li>
                                            <li>
                                                <a data-toggle="tab" href="#reviews" role="tab" aria-controls="reviews" aria-selected="false">Reviews</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="tab-content">
                                        <div className="tab-pane fade show active" id="info" role="tabpanel">
                                            <div className="product_info_content">
                                                <p>Fashion has been creating well-designed collections since 2010. The brand offers feminine designs delivering stylish separates and statement dresses which have since evolved into a full ready-to-wear collection in which every item is a vital part of a woman's wardrobe. The result? Cool, easy, chic looks with youthful elegance and unmistakable signature style. All the beautiful pieces are made in Italy and manufactured with the greatest attention. Now Fashion extends to a range of accessories including shoes, hats, belts and more!</p>
                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="sheet" role="tabpanel">
                                            <div className="product_d_table">
                                                <form action="#">
                                                    <table>
                                                        <tbody>
                                                            <tr>
                                                                <td className="first_child">Compositions</td>
                                                                <td>Polyester</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="first_child">Styles</td>
                                                                <td>Girly</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="first_child">Properties</td>
                                                                <td>Short Dress</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </form>
                                            </div>
                                            <div className="product_info_content">
                                                <p>Fashion has been creating well-designed collections since 2010. The brand offers feminine designs delivering stylish separates and statement dresses which have since evolved into a full ready-to-wear collection in which every item is a vital part of a woman's wardrobe. The result? Cool, easy, chic looks with youthful elegance and unmistakable signature style. All the beautiful pieces are made in Italy and manufactured with the greatest attention. Now Fashion extends to a range of accessories including shoes, hats, belts and more!</p>
                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="reviews" role="tabpanel">
                                            <div className="product_info_content">
                                                <p>Fashion has been creating well-designed collections since 2010. The brand offers feminine designs delivering stylish separates and statement dresses which have since evolved into a full ready-to-wear collection in which every item is a vital part of a woman's wardrobe. The result? Cool, easy, chic looks with youthful elegance and unmistakable signature style. All the beautiful pieces are made in Italy and manufactured with the greatest attention. Now Fashion extends to a range of accessories including shoes, hats, belts and more!</p>
                                            </div>
                                            <div className="product_info_inner">
                                                <div className="product_ratting mb-10">
                                                    <ul>
                                                        <li><a href="#"><i className="fa fa-star" /></a></li>
                                                        <li><a href="#"><i className="fa fa-star" /></a></li>
                                                        <li><a href="#"><i className="fa fa-star" /></a></li>
                                                        <li><a href="#"><i className="fa fa-star" /></a></li>
                                                        <li><a href="#"><i className="fa fa-star" /></a></li>
                                                    </ul>
                                                    <strong>Posthemes</strong>
                                                    <p>09/07/2018</p>
                                                </div>
                                                <div className="product_demo">
                                                    <strong>demo</strong>
                                                    <p>That's OK!</p>
                                                </div>
                                            </div>
                                            <div className="product_review_form">
                                                <form action="#">
                                                    <h2>Add a review </h2>
                                                    <p>Your email address will not be published. Required fields are marked </p>
                                                    <div className="row">
                                                        <div className="col-12">
                                                            <label htmlFor="review_comment">Your review </label>
                                                            <textarea name="comment" id="review_comment" defaultValue={""} />
                                                        </div>
                                                        <div className="col-lg-6 col-md-6">
                                                            <label htmlFor="author">Name</label>
                                                            <input id="author" type="text" />
                                                        </div>
                                                        <div className="col-lg-6 col-md-6">
                                                            <label htmlFor="email">Email </label>
                                                            <input id="email" type="text" />
                                                        </div>
                                                    </div>
                                                    <button type="submit">Submit</button>
                                                </form>
                                            </div>
                                        </div>
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

export default productDetail