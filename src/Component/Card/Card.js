import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { toast } from 'react-hot-toast';

const Card = () => {

    const { data: allData = [], isLoading, refetch } = useQuery({
        queryKey: ['allData'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/allData`);
            const data = await res.json();
            return data;
        }
    })

    const handleDelete = id => {
        fetch(`http://localhost:5000/allData/${id}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application.json'
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                // if (data.deletedCount > 0) {
                //     toast.success('Delete Confirmed')
                // }
            })
            .catch(err => console.error(err))
    }


    if (isLoading) {
        <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-400"></div>
    }


    return (
        <div className='container mx-auto'>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-8'>
                {
                    allData?.map(data => <div
                        key={data.id}
                        className="card  card-compact shadow-xl" data-aos="zoom-in" data-aos-duration="3000">
                        <figure ><img className='h-[350px] w-full' src={data?.thumbnail} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title px-2">{data?.title}</h2>
                            <p className='font-semibold px-2'>Category: {data?.description}</p>
                            <p className='font-semibold px-2'>Price: {data?.price}</p>
                            <p className='font-semibold px-2'>Rating: {data?.rating}</p>
                            <p className='font-semibold px-2'>Brand: {data?.brand}</p>
                            <p className='font-semibold px-2'>Stock: {data?.stock}</p>
                            <p className='font-semibold px-2'>DiscountPercentage: {data?.discountPercentage}</p>
                            <p className='font-semibold px-2'>Category: {data?.category}</p>
                        </div>
                        <div>
                            <button onClick={() => handleDelete()} className="btn btn-square w-full btn-outline">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                            </button>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Card;

// const { title, description, price, discountPercentage, rating, stock, brand, category, thumbnail, images } 