import React from 'react';

const Tshirt = ({tshirt,addToCart}) => {
    const {_id,name,picture,price} = tshirt
    return (
        <div className='border rounded'>
            <img className='w-44' src={picture} alt="" />
            <h4>{name}</h4>
            <p>Price :${price}</p>
            <button onClick={()=>addToCart(tshirt)}> Buy Now</button>
        </div>
    );
};

export default Tshirt;