import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css';

const Service = ({ service }) => {
    const navigate = useNavigate();

    const { name, price, description, img } = service;
    return (
        <div className='service'>
            <img src={img} alt="" />
            <h2>{name}</h2>
            <p>{price}</p>
            <p><small>{description}</small></p>
            <button className='btn btn-primary' onClick={() => { navigate(`/service/${service.id}`) }}>Book: {name}</button>
        </div>
    );
};

export default Service;