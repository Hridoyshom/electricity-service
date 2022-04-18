import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceDetails = () => {
    const { serviceId } = useParams();
    return (
        <div>

            <div className='text-center' >
                <Link to="/checkout" >
                    <button className='btn btn-primary' >Checkout</button>
                </Link>
            </div>
        </div>
    );
};

export default ServiceDetails;