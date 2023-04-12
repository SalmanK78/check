import React from 'react';

const Cart = ({cart,remove}) => {
    let messege ;
    if(cart.length ===0 ){
        messege = <p>please add</p>
    }
    else{
        messege = <div>
            <h1>Brolox</h1>
            <p><small>thanks for giving your money</small></p>
        </div>
    }
    return (
        <div>
            <h2>Order Summmary {cart.length}</h2>
            {messege}
            {
                cart.map(s=><p key={s._id}>{s.name} <button onClick={()=> remove(s._id)}>x</button></p>)
            }
            <h2>h</h2>
        </div>
    );
};
export default Cart;
