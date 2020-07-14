import React from 'react'
import data from './../data.json'
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';





const ProductIndex = () => {


    return (
        <div >

            <div className='productContainer'>
                {Object.entries(data).map(([id, { name, img }]) => (

                    <Link key={id} className='link' to={`/Product/${id}`}>
                        
                        <img className='indexImage' src={img} alt={name} />
                        <h3 className='indexHthree'> {name} </h3>

                        <Button className='btnATC' variant="contained" color="primary" >
                            <ShoppingCartIcon fontSize='small' />
                                Add To Cart
                </Button>

                    </Link>


                ))}


            </div>




        </div>
    )
}
export default ProductIndex
























