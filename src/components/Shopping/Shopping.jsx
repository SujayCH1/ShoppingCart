import React, { useContext, useState } from 'react'
import { shopItems } from '../../data/data'
import './Shopping.css'
import CartContext from '../../context/cartContext'
import SearchContext from '../../context/SearchContext'

const Shopping = () => {

    const {cart, setCart} = useContext(CartContext)
    const {search, setSearch} = useContext(SearchContext)



    // handles adding of item in the shopping cart
    const handleClick = (itemID) => {
        const item = shopItems.find(item => item.id == itemID)

        const exsitingCartItem = cart.find(item => item.id == itemID)

        if(exsitingCartItem){
            setCart(cart.map(cartItem =>
                cartItem.id === itemID
                ? { ...cartItem, quantity: cartItem.quantity + 1} : cartItem
            ))
        } else {
            setCart([...cart, { ...item, quantity: 1 }])
        }
    }

    // filtering items based on search query
    const filteredItems = shopItems.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase()) || 
        item.brand.toLowerCase().includes(search.toLowerCase()) || 
        item.description.toLowerCase().includes(search.toLowerCase())
    );

  return (
    <div className='shoppingItems'>
        {
            filteredItems.map((item) => {
                return (
                    <div key = {item.id} className='itemCard'>
                        <div className='image'>
                            <img src= {item.image} alt = 'image' className='itemImage'/>
                        </div>
                        <div className='itemRating'>{item.rating} <img src = 'https://www.svgrepo.com/show/13695/star.svg'/></div>
                        <div className='itemName'>{item.name}</div>
                        <div className='itemBrand'>{item.brand}</div>
                        <div className='itemDesc'>{item.description}</div>
                        <button className='itemPrice' onClick={() => handleClick(item.id)}>{item.price}</button>
                    </div>
                )
            })
        }
    </div>
  )
}

export default Shopping
