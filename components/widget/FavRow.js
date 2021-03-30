
import Link from 'next/link'
import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addProductToCart, deleteProductFromCart } from '../../store/actions/cartActions'

const FavRow = ({ product }) => {
    const dispatch = useDispatch();
    const [qty, setQty] = useState(1)

     console.log(product)
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
             dispatch(addProductToCart(product, qty))
        }
        else{
            console.log('hdhdh here')
            setQty(product.quantity)
        }
    }



    return (
        <tr>
            <td class="product-thumbnail">
                <a href="#"><img class="img-responsive ml-3" src={"static/assets/images/product-image/" + product.productPicture} alt="" /></a>
            </td>
            <td class="product-name"><a href="#">{product.productName}</a></td>
            <td class="product-price-cart"><span class="amount">{product.productPrice}</span></td>
      
            <td class="product-remove">
                <Link href={"/products/" + product.productId}>
                    <a href="#"><i class="icon-eye"></i></a>
                </Link>
            </td>
        </tr>
    )
}

export default FavRow



