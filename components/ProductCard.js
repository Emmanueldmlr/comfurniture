
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addProductToCart, deleteProductFromCart } from '../store/actions/cartActions'

const ProductCard = ({product, productInCart}) => {
   const dispatch =  useDispatch()
   const cart = useSelector(state => state.cart)
   const handleAddProductToCart = (product) => {
        dispatch(addProductToCart(product,1))
   }
   const handleRemoveProductFromCart = (product) => {
        dispatch(deleteProductFromCart(product.productId))
   }

    return (
        <div class="col-lg-3 col-md-6 col-sm-6 col-xs-6 mb-6" data-aos="fade-up" data-aos-delay="200">
            <div class="product">
                <div class="thumb">
                    <a href="shop-left-sidebar.html" class="image">
                        <img src={"static/assets/images/product-image/" + product.productPicture } alt="Product" />
                        <img class="hover-image" src={"static/assets/images/product-image/" + product.productPicture } alt="Product" />
                    </a>
                    <span class="badges">
                        <span class="new">New</span>
                    </span>
                    <div class="actions">
                        <a href="#" class="action wishlist" title="Wishlist"><i
                            class="icon-heart"></i></a>

                    </div>
                    {
                        productInCart ? 
                        <button onClick={()=>handleRemoveProductFromCart(product)} title="Add To Cart" class=" add-to-cart">Remove From Cart</button>
                         :
                         <button onClick={()=>handleAddProductToCart(product)} title="Add To Cart" class=" add-to-cart">Add
                         To Cart</button>
                    }
                    
                </div>
                <div class="content">
                    <h5 class="title"><a href="shop-left-sidebar.html">{product.productName}</a></h5>
                    <span class="price">
                        <span class="new">₦{product.productPrice}</span>
                    </span>
                </div>
            </div>
        </div>

    )
}

export default ProductCard



