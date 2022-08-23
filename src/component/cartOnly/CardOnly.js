import React from 'react';

const CardOnly = ({Cart}) => {
    return (
        <div>
            <h3>Order Summery</h3>

        <div>

        <h3> Selected Product :{Cart.length}</h3>
        </div>
        </div>
    );
};

export default CardOnly;