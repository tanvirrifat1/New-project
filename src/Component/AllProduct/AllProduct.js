import React from 'react';
import { Link } from 'react-router-dom';

const AllProduct = ({ card }) => {
    const { title, description, price, discountPercentage, rating, stock, brand, category, thumbnail, images } = card
    return (
        <div >
            <div className="card  card-compact shadow-xl" data-aos="fade-up"
                data-aos-duration="3000">
                <figure ><img className='h-[350px] w-full' src={thumbnail} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title px-2">{title}</h2>
                    <p className='font-semibold px-2'>Price: {price}</p>
                    <p className='font-semibold px-2'>Rating: {rating}</p>
                    <p className='font-semibold px-2'>Brand: {brand}</p>
                    <p className='font-semibold px-2'>Category: {category}</p>
                    <div className='px-2 '>
                        <Link to='details' state={{ card: card }} className="link btn btn-primary w-full link-accent">Details</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllProduct;