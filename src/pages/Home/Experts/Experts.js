import React from 'react';
import expert1 from '../../../images/experts/expert-1.jpg';
import expert2 from '../../../images/experts/expert-2.jpg';
import expert3 from '../../../images/experts/expert-3.jpg';
import expert4 from '../../../images/experts/expert-4.jpg';
import expert5 from '../../../images/experts/expert-5.jpg';
import expert6 from '../../../images/experts/expert-6.jpg';
import Expert from '../Expert/Expert';

const experts = [
    { id: 1, name: 'Will Smith', img: expert1 },
    { id: 2, name: 'Chris Rock', img: expert2 },
    { id: 3, name: 'Johny', img: expert3 },
    { id: 4, name: 'Hasan', img: expert4 },
    { id: 5, name: 'Kamal', img: expert5 },
    { id: 6, name: 'Ritika', img: expert6 },

];

const Experts = () => {
    return (
        <div className='container mt-5'>
            <h2 className='text-primary text-center'>our experts</h2>
            <div className='row'>
                {
                    experts.map(expert => <Expert key={expert.id} expert={expert}></Expert>)
                }
            </div>
        </div>
    );
};

export default Experts;