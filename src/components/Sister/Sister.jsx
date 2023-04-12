import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const Sister = () => {
    const anti = useContext(RingContext)
    return (
        <div>
            <h2>Sister</h2>
            <p>{anti}</p>
        </div>
    );
};

export default Sister;