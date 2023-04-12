import React, { useContext } from 'react';
import { MoneyContext } from '../Grandpa/Grandpa';

const Unty = () => {
    const [money] = useContext(MoneyContext)
    return (
        <div>
            <h1>Unty</h1>
            <p>{money}</p>
        </div>
    );
};

export default Unty;