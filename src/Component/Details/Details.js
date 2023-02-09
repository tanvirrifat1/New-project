import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import { BsFillArrowLeftCircleFill } from 'react-icons/bs';
import { useLocation, useNavigate } from 'react-router-dom';
import LoadingButton from '../Loding/LoadingButton';
import SmallSpinner from '../Loding/SmallSpinner';

const Details = () => {
    const navigate = useNavigate()
    const location = useLocation()
    console.log(location.state.card)
    const { title, description, price, discountPercentage, rating, stock, brand, category, thumbnail, images } = location.state.card
    const [loading, setLoading] = useState(false)

    const handleSubmitData = (event) => {
        event.preventDefault()
        setLoading(true)
        const booking = {
            title,
            description,
            price,
            discountPercentage,
            rating,
            brand,
            thumbnail,
            stock,
            category
        }
        console.log(booking)


        fetch(`http://localhost:5000/bookings`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success('Booking Confirmed')
                    setLoading(false)
                    navigate('/card')
                }
            })
    }





    return (
        <div className='container mx-auto p-10'>
            <div onClick={() => navigate(-1)}>
                <p className='text-black text-3xl p-4 my-4'><BsFillArrowLeftCircleFill /></p>
            </div>
            <form onSubmit={handleSubmitData}>
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
                        <div className='mt-4'>
                            <LoadingButton
                                type="submit"
                                className='btn btn-accent mt-3 w-full'
                                value='Send'
                            >
                                {loading ? <SmallSpinner /> : 'buy'}
                            </LoadingButton>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Details;