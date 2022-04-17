import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import repair1 from './../../../images/repair1.png';
import './Services.css';

// const services = [
//     {id:1, name: 'oil change', price: 100, description: 'lorem ispum', img:repair1}
//     { id: 1, name: 'oil change', price: 100, description: 'lorem ispum', img: 'https://i.ibb.co/k6pTq39/kate-ibragimova-b-EGTs-OCn-Hro-unsplash-1.png' }
// ]

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);

    return (
        <div id='services' className='container'>
            <h3 className='text-primary text-center mt-5'>Our Services</h3>
            <div className='services-container'>
                {
                    services.map(service => <Service key={service.id} service={service}></Service>)
                }
            </div>
        </div>
    );
};

export default Services;