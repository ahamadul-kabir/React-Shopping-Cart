import React from 'react';
import "./CardOnly.css";

const CardOnly = ({Cart}) => {

//  const {Cart} = props;

 console.log(Cart);


 let total = 0;
 let Shippingcharge = 0 ;

 for(const Items of Cart)
 {
    total = total + Items.price;
    Shippingcharge = Shippingcharge + Items.shipping;

    // console.log(Items.name);
 }

let tex = total * 7/100 ;

let GrandTotal = total + Shippingcharge + tex ;
    return (
        <div className='cardOnly'>
            <h3>Order Summery</h3>

            <div className='cardDetails'>

                <h4> Selected Product : {Cart.length}</h4>

                <p>Total Price : {total}</p>

                <p>Total Shipping Charge : {Shippingcharge} </p>

                <p>Tax ( 7% ) : { tex }</p>

                <h5>Grand Total : {GrandTotal} </h5>
            </div>
        </div>
    );
};

export default CardOnly;