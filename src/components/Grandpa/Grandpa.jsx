import React, { createContext, useState } from 'react';
import Father from '../Father/Father';
import Unlce from '../Uncle/Unlce';
import Unty from '../Unty/Unty';
import './Grandpa.css'
export const RingContext = createContext('Goldenring')
export const MoneyContext = createContext(0)
const Grandpa = () => {
   const [money ,setMoney] =useState(0)
    return (
        <div className='grandpa'>
            <h1>Grandpa</h1>
            <p>Has Money {money}</p>
           <MoneyContext.Provider value={[money,setMoney]}>
           <RingContext.Provider value='ring'>
            <section className='flex justify-center'>
                <Father></Father>
                <Unlce></Unlce>
                <Unty></Unty>
            </section>
            </RingContext.Provider>
           </MoneyContext.Provider>
        </div>
    );
};

export default Grandpa;