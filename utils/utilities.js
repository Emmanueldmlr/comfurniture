
export const getAccessToken = () => {
    return localStorage.getItem(process.env.tokenName)
}

export const getRefreshToken = () => {
    return localStorage.getItem(process.env.refreshTokenName)
}

export const saveAccessToken = (token) => {
    localStorage.setItem(process.env.tokenName, token)
}

export const saveRefreshToken = (token) => {
    localStorage.setItem(process.env.refreshTokenName, token)
}

export const saveCartItem = (cart) => {
    localStorage.setItem(process.env.cartId, cart)
}

export const getCartItem = () => {
    return localStorage.getItem(process.env.cartId)
}

