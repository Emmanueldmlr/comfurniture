
import Link from 'next/link'
import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addProductToCart, deleteProductFromCart } from '../../store/actions/cartActions'

const CartRow = ({ productInCart }) => {
    const dispatch = useDispatch();
    const [qty, setQty] = useState(productInCart.quantity)
    // console.log(qty)
    // const handleAddProductToCart = (product) => {
    //     dispatch(addProductToCart(product, 1))
    // }

    const handleRemoveProductFromCart = (product) => {
        dispatch(deleteProductFromCart(product.productId))
    }

    const handleOnBlur = () => {
        console.log(qty)
        if(qty > 0){
            console.log('its here')
             dispatch(addProductToCart(productInCart, qty))
        }
        else{
            console.log('hdhdh here')
            setQty(productInCart.quantity)
        }
    }



    return (
        <tr>
            <td class="product-thumbnail">
                <a href="#"><img class="img-responsive ml-3" src={"static/assets/images/product-image/" + productInCart.productPicture} alt="" /></a>
            </td>
            <td class="product-name"><a href="#">{productInCart.productName}</a></td>
            <td class="product-price-cart"><span class="amount">{productInCart.productPrice}</span></td>
            <td class="product-quantity">
                <div class="cart-plus-minus">
                    <input onBlur={handleOnBlur} onChange={(e)=>setQty(e.target.value) } class="cart-plus-minus-box" type="text" min='1' name="qtybutton" value={qty} />
                </div>
            </td>
            <td class="product-subtotal">{productInCart.totalPrice}</td>
            <td class="product-remove">
                <a href="#" onClick={() => handleRemoveProductFromCart(productInCart)}><i class="icon-close"></i></a>
            </td>
        </tr>
    )
}

export default CartRow



