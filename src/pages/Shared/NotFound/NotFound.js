import React from 'react';
import sleepingMechanic from '../../../images/sleeping-mechanic.png';

const NotFound = () => {
    return (
        <div style={{ textAlign: 'center' }}>
            <h2>Mechanic not in Store</h2>
            <img src={sleepingMechanic} alt="" width="360" />
        </div>
    );
};

export default NotFound;