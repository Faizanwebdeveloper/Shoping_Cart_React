import React, { useContext } from 'react'
import {
    Link
} from "react-router-dom"
import { State } from '../Context/Context';

const Header = () => {
    const { cart } = useContext(State);
    return (
        <section>
            <header>
                <nav>
                    <div className='logo'>
                        <Link to="/">CART</Link>
                    </div>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/product">Product</Link></li>
                        <li><Link to="/card">Card{cart.length > 0 && <sup>{cart.length}</sup>}</Link></li>
                    </ul>
                </nav>
            </header>
        </section>
    )
}

export default Header
