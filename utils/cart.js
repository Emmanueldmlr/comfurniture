export const calcTotalCartPrice = (cart) => {
    let total = 0
     cart.forEach( prod => {
        total = prod.totalPrice + total
     })
    return total
}