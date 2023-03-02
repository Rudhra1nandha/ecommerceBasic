// add items to cart
export const addCart = (product) => {
    return{
        type:"ADDITEM",
        payload:product
    }
}

// delete items from cart
export const delCart = (product) => {
    return{
        type:"DELITEM",
        payload:product
    }
}