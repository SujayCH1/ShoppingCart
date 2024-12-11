import { useState } from "react";
import CartContext from "./cartContext"

const  CartContextProvider = ({children}) => {

    const [cart, setCart] = useState([])

    return (
        <CartContext.Provider value={{cart, setCart}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;