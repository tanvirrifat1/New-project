import React from 'react';
import { useLocation } from 'react-router-dom';

const Details = () => {
    const location = useLocation()
    console.log(location.state.card)
    const { title, description, price, discountPercentage, rating, stock, brand, category, thumbnail, images } = location.state.card
    return (
        <div className='container mx-auto p-10'>
            <div className="card  card-compact shadow-xl">
                <div>
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                        {
                            images && images.map(image => <figure><img className='h-[350px] ' src={image} alt="Shoes" /></figure>)
                        }
                    </div>
                </div>
                <div className="card-body">
                    <h2 className="card-title px-2">{title}</h2>
                    <p className='font-semibold px-2'>Description: {description}</p>
                    <p className='font-semibold px-2'>Price: {price}</p>
                    <p className='font-semibold px-2'>DiscountPercentage: {discountPercentage}</p>
                    <p className='font-semibold px-2'>Rating: {rating}</p>
                    <p className='font-semibold px-2'>Stock: {stock}</p>
                    <p className='font-semibold px-2'>Brand: {brand}</p>
                    <p className='font-semibold px-2'>Category: {category}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary w-full">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;