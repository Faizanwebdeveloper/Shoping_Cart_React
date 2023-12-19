import React, { useContext, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import useFetch from '../costumehook/useFetch';
import { State } from '../Context/Context';

const Categorie = () => {
    const { id } = useParams();
    const url = `https://dummyjson.com/products/category/${id}`;
    const data = useFetch(url);
    const { cart, removeFromCart, addcard } = useContext(State);

    return (
        <>
        <h1 className='heading_cat'>Category {id}</h1>
            <div className='flex'>
                {data?.products?.map((item, i) => {
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
            </div></>

    )
}

export default Categorie
