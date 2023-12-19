import React, { useContext, useEffect, useState } from 'react'
import Product from './Product';
import { State } from '../Context/Context';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const { category } = useContext(State);
  const navigate = useNavigate();

  const cat = (item) => {
    navigate(`/category/${item}`);
  }

  return (
    <>
      <section>
        <div className='categories'>
          <ul>
            {category.map((item) => {
              return (
                <li onClick={() => cat(item)}>{item}</li>
              )
            })

            }
          </ul>
        </div>
      </section>
      <Product />
    </>
  )
}

export default Home
