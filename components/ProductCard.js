
import Link from 'next/link'
import Router from 'next/router';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addProductToCart, deleteProductFromCart } from '../store/actions/cartActions'
import { updateFavourite } from '../store/actions/productActions';

const ProductCard = ({product, productInCart, productInFav, favourite}) => {
   const dispatch =  useDispatch()
   const {user} = useSelector(state => state.auth)
   console.log(productInFav)
   const handleAddProductToCart = (product) => {
        dispatch(addProductToCart(product,1))
   }
   const handleRemoveProductFromCart = (product) => {
        dispatch(deleteProductFromCart(product.productId))
   }

   const handleFavourite = (productId) => {
        if(!user){
            Router.push('/login')
        }
        else{
            const payload = {
                productId,
                type:  productInFav ? 'delete' : 'add'
            }
            dispatch(updateFavourite(payload, favourite))
        }
   }


    return (
        <div class="col-lg-3 col-md-6 col-sm-6 col-xs-6 mb-6" data-aos="fade-up" data-aos-delay="200">
            <div class="product">
                <div class="thumb">
                    <Link href={"/products/" + product.productId}>
                        <a href="" class="image">
                            <img src={"../static/assets/images/product-image/" + product.productPicture } alt="Product" />
                            <img class="hover-image" src={"../static/assets/images/product-image/" + product.productPicture } alt="Product" />
                        </a>
                    </Link>
                    <span class="badges">
                        <span class="new">New</span>
                    </span>
                    <div class="actions" >
                        <span style={{cursor: 'pointer'}} onClick={()=>handleFavourite(product.productId)} href="#" class={productInFav ? "action active wishlist" : "action wishlist"} title="Wishlist"><i
                            class="icon-heart"></i></span>

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
                    <h5 class="title">
                        <Link href={"/products/" + product.productId}>
                             <a href="#">{product.productName}</a>
                        </Link>
                    </h5>
                    <span class="price">
                        <span class="new">₦{product.productPrice}</span>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default ProductCard



