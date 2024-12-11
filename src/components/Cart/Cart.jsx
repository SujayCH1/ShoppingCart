import React from 'react'
import { useContext } from 'react'
import CartContext from '../../context/cartContext'
import './Cart.css'

const Cart = () => {
  const { cart, setCart } = useContext(CartContext);


  //handles removing of item from shopping cart
  const removeItem = (ID, quantity) => {
    if (quantity === 1) {
      const newCart = cart.filter((item) => item.id !== ID);
      setCart(newCart);
    } else {
      const newCart = cart.map((item) => {
        if (item.id === ID) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      });
      setCart(newCart);
    }
  };

  return (
    <div className="cartList">
      {cart.map((item) => (
        <div key={item.id} className="cartItem">
          <img src={item.image} alt={item.name} />
          <div className="itemDetails">
            <span className="itemName">Name: {item.name}</span>
            {item.quantity >= 1 && <span className="quantity"> Quantity: {item.quantity}</span>}
          </div>
          <div className="itemPrice">Price: ${(item.price * item.quantity).toFixed(2)}</div>
          <button onClick={() => removeItem(item.id, item.quantity)}>Remove</button>
        </div>
      ))}
    </div>
  );
};

export default Cart;
