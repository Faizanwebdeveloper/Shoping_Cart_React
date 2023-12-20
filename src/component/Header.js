import React, { useContext, useState } from 'react'
import {
    Link
} from "react-router-dom"
import { State } from '../Context/Context';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const { cart,category} = useContext(State);
  const [sidecate,showsidecate] = useState(false);
  const navigate = useNavigate();
  const cat = (item) => {
    navigate(`/category/${item}`);
  }

    return (<>
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
                        <li onClick={()=>showsidecate(true)}>
                         <a href='#'>Categories</a> 
                        </li>
                    </ul>
                </nav>
            </header>
        </section>
       {/* Category SideBar */}
           

         {sidecate && 
                 <div className='categories'>
                 <div className='opac-layer'  onClick={()=>showsidecate(false)}></div>
                 <div className='content'>
                 <ul  onClick={()=>showsidecate(false)}>
                   {category.map((item) => {
                     return (
                       <li onClick={() => cat(item)}>{item}</li>
                     )
                   })
        
                   }
                 </ul>
                 </div>
             
               </div>
         
  
         }   
          
    </>
     
    )
}

export default Header
