import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import './DeviceCard.css';
import Items from '../Items/Items';
import CardOnly from '../cartOnly/CardOnly';

const DeviceCard = () => {

    const [Products , setProducts] = useState([]);

    const [Cart ,setCart] = useState([]);


    useEffect ( () => {


      fetch ('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json')
      .then (response => response.json())
      .then (data => setProducts(data) )


    } , []);



    const handleAddToCart = (Product) => {


    //    const Price = Product.price;

    //     console.log(Price);

        const newCart = [...Cart ,Product];
        setCart(newCart);
    }



    return (
        <div id='product' className='allProduct'>

        
            <div className='Product-Header-Title'>
                <h1>Total Products  : {Products.length}</h1>
            </div>

           <div className='ProductDiv'>

                <div className='product-cart'>


                        {
                            Products.map(Product => <Items key={Product.id} Product = {Product} handleAddToCart = {handleAddToCart} ></Items>)
                        }  

                </div>

                <div className='orderSummery' >

                  <CardOnly Cart={Cart}></CardOnly>


               

                </div>







           </div>

           
            
        </div>
    );
};

export default DeviceCard;