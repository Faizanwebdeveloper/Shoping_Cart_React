import React, { createContext, useState } from 'react'
import useFetch from '../costumehook/useFetch';

export const State = createContext();
const Context = ({ children }) => {
    const products = useFetch('https://dummyjson.com/products');
    const category = useFetch('https://dummyjson.com/products/categories');
    const [total, settotal] = useState(0);
    // Add To Cart And Remove To Cart
    const [cart, setcart] = useState([]);
    const addcard = (item) => {
        setcart([...cart, item]);
        settotal((prevtotal) => prevtotal + Math.ceil(item.price * 83.24));
    }
    const removeFromCart = (itemToRemove) => {
        const updatedCart = cart.filter(item => item !== itemToRemove);
        setcart(updatedCart);
        settotal((prevtotal) => prevtotal - Math.ceil(itemToRemove.price * 83.24))
    }
    // Add To Cart And Remove To Cart End

    return <State.Provider value={{ products, category, addcard, removeFromCart, cart, total }}> {children} </State.Provider>
}

export default Context
