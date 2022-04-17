import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceDetail = () => {
    let params = useParams();

    return (
        <div>
            <h2>service id: {params.serviceId}</h2>
            <div className='text-center'>
                <Link to='/checkout'>
                    <button className='btn btn-primary'>Proceed Checkout</button>
                </Link>
            </div>
        </div>
    );
};

export default ServiceDetail;