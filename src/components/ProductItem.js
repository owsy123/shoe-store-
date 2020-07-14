import React from 'react';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import { useParams } from 'react-router-dom'
import data from '../data.json'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';


const ProductItem = () => {
    const { id } = useParams()
    const shoe = data[id]

    if (!shoe) {
        return (
            <div><h2>Sorry Image not Found...!!!!</h2></div>)
    }
    const { name, img } = shoe



    return (
        <div>
            <Paper variant="outlined" >
                <h2 className='itemHtwo'>{name}</h2>
                <img className='itemImg' src={img} alt={name} />
                <Button variant="contained" color="primary" >
                    <ShoppingCartIcon fontSize='small' />
                    Add To Cart
                </Button>

            </Paper>

        </div>
    );
}
export default ProductItem






