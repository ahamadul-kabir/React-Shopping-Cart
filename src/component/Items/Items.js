import React from 'react';
import { Button} from 'react-bootstrap';
import './Items.css'
const Items = (props) => {

    // console.log(props);

    const {Product , handleAddToCart} = props;

    const { name , img , price , seller } = props.Product;



    
    return (



        <div>

                    <div className="card">
                        <div className="card__image">
                        <img src={img}></img>
                        </div>
                        <div className="card__copy">
                        <h6>{name}</h6>
        
                        <p> Price : {price}</p>
                        <p> Seller Name : {seller}</p>

                        <Button variant="outline-primary" onClick={ () => handleAddToCart(Product)} >Add To Cart </Button>{' '}
                        </div>
                    </div>

                   
        </div>
    );
};

export default Items;