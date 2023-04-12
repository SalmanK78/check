import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Tshirt from '../Tshirt/Tshirt';
import Cart from '../Cart/Cart';

const Home = () => {
    const tshirt = useLoaderData();
    console.log(tshirt)
    const [cart,setCart] = useState([]);

    const addToCart = (tshirt)=>{
        const exists = cart.find(ts=>ts._id === tshirt._id)
        if(exists){
            alert('shf')
            return
        }
        const newCart = [...cart,tshirt]
        setCart(newCart)
        console.log(newCart)
    }

    const remove = id =>{
        
        const remaining = cart.filter(ts=>ts._id !== id)
        setCart(remaining)
    }
    return (
        <div className='grid grid-cols-3 gap-[10px] justify-items-center'>
            <div className='col-span-2 grid grid-cols-3 gap-3 justify-items-center'>
            {
            tshirt.map(shirt => <Tshirt
                key={shirt._id}
                tshirt={shirt}
                addToCart={addToCart}
                
            >

            </Tshirt>)
            }
            </div>
            <div>
                <Cart remove={remove} cart={cart}> </Cart>
            </div>
        </div>
    );
};

export default Home;