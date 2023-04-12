import React, { useContext } from 'react';
import { MoneyContext } from '../Grandpa/Grandpa';

const Unlce = () => {
    const [money,setMoney] = useContext(MoneyContext)
    return (
        <div>
            <h1>Uncle</h1>
            <p>grandpa money :{money}</p>
            <button onClick={()=>setMoney(money+100)}>send 100tk</button>
        </div>
    );
};

export default Unlce;