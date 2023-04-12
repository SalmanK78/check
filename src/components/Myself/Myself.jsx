import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const Myself = () => {
    const anti = useContext(RingContext)
    return (
        <div>
            <h1>My self</h1>
            <p>{anti}</p>
        </div>
    );
};

export default Myself;