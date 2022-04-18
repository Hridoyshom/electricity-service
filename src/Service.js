import React from 'react';

const Service = ({ service }) => {
    const { name, img, description, price } = service;
    return (
        <div className="container" >
            <img src={img} alt="" />
            <h2  >this is service: {name}</h2>
            <p>price:{price}</p>
            <p><small>{description}</small></p>
            <button>Book:{name}</button>
        </div>
    );
};

export default Service;