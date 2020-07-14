import React from 'react'
import data from './../data.json'
import {Outlet} from 'react-router-dom'

 const Product = () => {
     console.log(data);
     
    return (
        <div>
            <h1> Top Rated Products</h1>
            <Outlet />
        </div>
    )
}
export default Product
