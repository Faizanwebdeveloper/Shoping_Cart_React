import React, { useContext, useEffect, useState } from 'react'
import { State } from '../Context/Context';


const Card = () => {
  const { cart, addcard, removeFromCart, total } = useContext(State);

  const increase = (itemId) => {
    console.log(itemId);
    cart.map((item) => {
      console.log(item?.count);
      if (item.id === itemId) {
        return { ...item, count: item.count + 1 }
      }
      return item;
    })

  }

  const dicrease = () => {

  }
  return (
    <>
      {cart?.length === 0 ? (<h1 className='empty'>Cart is empty now</h1>) : (
        cart?.map((item, i) => {
          const isInCart = cart.includes(item);
          return (
            <div className="cartbox" key={i}>
              <div className="img">
                <img src={item.thumbnail} />
              </div>
              <p>{item.title}</p>
              <p className="price">₹{Math.ceil(item.price * 83.24)}</p>
              <div>
                <button onClick={() => dicrease(item.id)}>-</button>
                <input value={item.count || 1} className='input' />
                <button onClick={() => increase(item.id)}>+</button>
              </div>

              {isInCart ? (
                <button className="addbuton" onClick={() => removeFromCart(item)}>Delete</button>
              ) : (
                <button className="addbuton" onClick={() => addcard(item)} >Add To Card</button>
              )

              }
            </div>
          )
        })
      )}
      {cart.length === 0 ? ("") : (
        <div className='subtotal'>
          <h2>Shipping Charges :- ₹100</h2>
          <h2>Sub Total :- ₹{total + 100}</h2>
          <button className='addbuton'>Proceed To Buy</button>
        </div>
      )}
    </>
  )
}

export default Card
