import { useContext, useEffect, useState } from "react"
import { State } from '../Context/Context';
import Skeleton from 'react-loading-skeleton';


const Product = () => {
  const { products, addcard, removeFromCart, cart } = useContext(State);

  return (
    <>
      <div className='grid'>
        {products?.products?.map((item, i) => {
          const isInCart = cart.includes(item);
          return (
            <div className="box" key={i}>

              <img src={item.thumbnail} />
              <p className="price">{item.title}</p>
              <p>{item.description.slice(0, 40)}...</p>
              <p className="">₹{Math.ceil(item.price * 83.24)}</p>
              {isInCart ? (
                <button className="addbuton" onClick={() => removeFromCart(item)}>Remove From Cart</button>
              ) : (
                <button className="addbuton" onClick={() => addcard(item)} >Add To Card</button>
              )

              }

            </div>
          )
        })}

      </div>
    </>

  )
}

export default Product
